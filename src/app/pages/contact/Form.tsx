'use client'
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

export default function Form(): JSX.Element {
    const { toast } = useToastify()
    const onSendEmail = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        const target = e.target as Target

        try {
            const isProd = process.env.NODE_ENV === 'production'
            const baseUrl = isProd ? 'https://douglasmatosdasilva.com.br' : 'http://localhost:3000'

            await fetch(`${baseUrl}/pages/contact/api`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: target.name.value,
                    email: target.email.value,
                    message: target.message.value
                })
            })

            toast('Email enviado com sucesso', 'success')
        } catch (e) {
            toast('Um erro aconteceu ao tentar envia o email', 'error')
            console.error(e)
        }
    }

    return (
        <form className="flex flex-col max-w-[400px] mb-6" onSubmit={onSendEmail} title="formulário de contato">
            <div className="flex flex-col mb-3">
                <label className="text-dmds-2 dark:text-dmds-1 uppercase text-sm font-medium" htmlFor="name">
                    Nome
                </label>
                <input
                    className="bg-none border rounded-md p-3 focus:outline-none focus:border-cyan-400"
                    id="name"
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
                    type="email"
                    placeholder="super@man.com"
                    required
                />
            </div>
            <div className="flex flex-col mb-3">
                <label className="text-dmds-2 dark:text-dmds-1 uppercase text-sm font-medium" htmlFor="message">
                    Mensagem
                </label>
                <textarea
                    className="bg-none border rou p-3 focus:outline-none focus:border-cyan-400"
                    id="message"
                    placeholder="Como posso ajudar você?"
                    rows={4}
                    required
                />
            </div>
            <div className="flex flex-col mb-3">
                <button
                    className="bg-dmds-5 text-dmds-2 border cursor-pointer p-3 mt-2"
                    type="submit"
                    title="botão para enviar formulário"
                >
                    Enviar
                </button>
            </div>
        </form>
    )
}
