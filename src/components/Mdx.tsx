import React from 'react'
// import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { cn } from '@/utils/tailwindMerge'

const components = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className={cn('mt-2 scroll-m-20 text-4xl font-bold tracking-tight', className)} {...props} />
    )
}

interface MdxProps {
    code: string
}

export function Mdx({ code }: MdxProps): JSX.Element {
    const Component = useMDXComponent(code)

    return (
        // <div className="mdx dark:bg-slate-950">
        <div>
            <Component components={components} />
        </div>
        // </div>
    )
}
