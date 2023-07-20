import React from 'react'

/**
 * 
 * @param text string
 * @param elRef HTMLElement
 * @param speed defautl value 30
 * @param delay default value 0
 */
export const useTextAnimation = (text: string, elRef: React.RefObject<HTMLElement>, speed: number = 30, delay: number = 0): void => {

    async function animationText() {
        let caracteres = text.split('')

        for (const letter of caracteres) {
            elRef.current!.textContent += letter
            await new Promise(resolve => setTimeout(resolve, speed))
        }
    }

    React.useEffect(() => {
        setTimeout(() => {
            if (text && elRef?.current) {
                if (elRef.current.textContent?.length === 0) {
                    animationText()
                }
            }
        }, delay)
    }, [text, elRef])
}