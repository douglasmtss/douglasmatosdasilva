import React from 'react'
import { github_api } from '@/services/github/api'

export const useGithubApi = (): {
    loading: boolean
    data: GithubApiResponseData | Record<string, never>
} => {
    const [data, setData] = React.useState<GithubApiResponseData | Record<string, never>>({})
    const [loading, setLoding] = React.useState<boolean>(true)

    React.useEffect(() => {
        github_api()
            .then(response => {
                setData(response)
                setLoding(false)
            })
            .catch(err => {
                console.error("Error to trying consumes github api, with error " + err)
            })
    }, [])

    return {
        data,
        loading
    }

}