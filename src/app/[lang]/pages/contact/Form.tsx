'use client'
import { Locale } from '#/i18n.config'
import { useToastify } from '@/hooks/useToastify'

type Target = {
    name: {
        value: string
    }
    email: {
        value: string
    }
    message: {
        value: string
    }
} & React.FormEvent<HTMLFormElement>['target']

interface FormProps {
    lang: Locale
}

const dictionary = {
    br: {
        success: 'Email enviado com sucesso.',
        error: 'Um erro aconteceu ao tentar enviar o email',
        name: 'Nome',
        message: 'Mensagem',
        message_placeholder: 'Como posso ajudar você?',
        send: 'Enviar'
    },
    en: {
        success: 'Email successfully sent.',
        error: 'An error occurred when trying to send the email',
        name: 'Name',
        message: 'Message',
        message_placeholder: 'Can i help you?',
        send: 'Send'
    }
}

export default function Form({ lang }: FormProps): JSX.Element {
    const dic = dictionary[lang]

    const { toast } = useToastify()

    const onSendEmail = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        const target = e.target as Target

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: target.name.value,
                    email: target.email.value,
                    message: target.message.value,
                    website: (e.currentTarget.elements.namedItem('website') as HTMLInputElement)?.value
                })
            })

            if (!response.ok) {
                throw new Error(`Contact request failed with status ${response.status}`)
            }

            toast(dic.success, 'success')
        } catch (e) {
            toast(dic.error, 'error')
            console.error(e)
        }
    }

    return (
        <form className="flex flex-col max-w-[400px] mb-6" onSubmit={onSendEmail} title="formulário de contato">
            <div className="flex flex-col mb-3">
                <label className="text-dmds-2 dark:text-dmds-1 uppercase text-sm font-medium" htmlFor="name">
                    {dic.name}
                </label>
                <input
                    className="bg-none border rounded-md p-3 focus:outline-none focus:border-cyan-400"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Super Man"
                    required
                />
            </div>
            <div className="flex flex-col mb-3">
                <label className="text-dmds-2 dark:text-dmds-1 uppercase text-sm font-medium" htmlFor="email">
                    Email
                </label>
                <input
                    className="bg-none border rounded-md p-3 focus:outline-none focus:border-cyan-400"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="super@man.com"
                    required
                />
            </div>
            <div className="flex flex-col mb-3">
                <label className="text-dmds-2 dark:text-dmds-1 uppercase text-sm font-medium" htmlFor="message">
                    {dic.message}
                </label>
                <textarea
                    className="bg-none border rou p-3 focus:outline-none focus:border-cyan-400"
                    id="message"
                    name="message"
                    placeholder={dic.message_placeholder}
                    rows={4}
                    required
                />
            </div>
            <input className="hidden" tabIndex={-1} autoComplete="off" name="website" aria-hidden="true" />
            <div className="flex flex-col mb-3">
                <button
                    className="bg-dmds-5 text-dmds-2 border cursor-pointer p-3 mt-2"
                    type="submit"
                    title="botão para enviar formulário"
                >
                    {dic.send}
                </button>
            </div>
        </form>
    )
}
