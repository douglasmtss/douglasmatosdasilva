import React from 'react'

export interface SectionProps {
    title: string
    subtitle?: string
    content?: string
}

export const Section = ({
    title = '',
    subtitle = '',
    content = ''
}: SectionProps) => {
    return (
        <section className="w-full mx-auto py-10">
            <div>
                <h3 className="text-3xl py-1 dark:text-white ">{title}</h3>
                <h3 className="text-lg py-1 dark:text-white ">{subtitle}</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    {content}
                </p>
            </div>
        </section>
    )
}

