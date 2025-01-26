export function handleText(text: string, variables: string | number[]): string {
    if (!text || !variables) return ''

    let newText = ''
    let index = 0

    text.split('{{}}').forEach((s, i) => {
        if (i % 2 === 0) {
            newText += s
        } else {
            newText += variables[index] + s
            index++
            newText += variables[index]
        }
    })

    return newText
}
