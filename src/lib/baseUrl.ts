import { isDevMode } from './is-dev-mode'

export default function getBaseUrl(): string {
    const url = isDevMode() ? 'http://localhost:3000' : 'https://douglasmatosdasilva.com.br'

    return url
}
