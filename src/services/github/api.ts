import axios from 'axios'

const GITHUB_USERNAME = 'douglasmatosdev'

const api = axios.create({
    baseURL: `https://api.github.com/users`
})

export const github_api = async (): Promise<GithubApiResponseData> => {
    return await api.get(`/${GITHUB_USERNAME}`)
        .then(response => {
            return response.data
        })
}