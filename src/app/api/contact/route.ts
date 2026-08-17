import info from '@/utils/info'
import { Resend } from 'resend'

const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5
const requests = new Map<string, { count: number; resetAt: number }>()

function escapeHtml(value: string): string {
    return value.replace(
        /[&<>'"]/g,
        character =>
            ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] ?? character
    )
}

function getClientKey(request: Request): string {
    return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
}

function isRateLimited(key: string): boolean {
    const now = Date.now()
    const current = requests.get(key)

    if (!current || current.resetAt <= now) {
        requests.set(key, { count: 1, resetAt: now + WINDOW_MS })
        return false
    }

    current.count += 1
    return current.count > MAX_REQUESTS
}

export async function POST(request: Request): Promise<Response> {
    if (isRateLimited(getClientKey(request))) {
        return Response.json({ error: 'Too many requests' }, { status: 429 })
    }

    try {
        const formData = await request.json()
        const name = typeof formData.name === 'string' ? formData.name.trim() : ''
        const email = typeof formData.email === 'string' ? formData.email.trim() : ''
        const message = typeof formData.message === 'string' ? formData.message.trim() : ''
        const honeypot = typeof formData.website === 'string' ? formData.website.trim() : ''

        if (honeypot) {
            return Response.json({ ok: true })
        }

        if (!name || name.length > 100 || !email || email.length > 254 || message.length < 1 || message.length > 5000) {
            return Response.json({ error: 'Invalid form data' }, { status: 400 })
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return Response.json({ error: 'Invalid email' }, { status: 400 })
        }

        const apiKey = process.env.NEXT_PULIC_RESEND_API_KEY
        const from = process.env.NEXT_PULIC_RESEND_FROM_EMAIL

        if (!apiKey || !from) {
            return Response.json({ error: 'Contact service is not configured' }, { status: 503 })
        }

        const { mail } = info()
        const resend = new Resend(apiKey)
        const result = await resend.emails.send({
            from,
            to: mail.secundary,
            reply_to: email,
            subject: `Contato via website: ${name}`,
            html: `
                <div>
                    <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Mensagem:</strong> ${escapeHtml(message).replaceAll('\n', '<br />')}</p>
                </div>
            `
        })

        if (result.error) {
            console.error('Resend error', result.error)
            return Response.json({ error: 'Unable to send email' }, { status: 502 })
        }

        return Response.json({ ok: true })
    } catch (error) {
        console.error('Contact endpoint error', error)
        return Response.json({ error: 'Unable to send email' }, { status: 500 })
    }
}
