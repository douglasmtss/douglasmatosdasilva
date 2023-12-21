import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { cn } from '@/utils/tailwindMerge'
import Image from 'next/image'

const components = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className={cn('mt-2 scroll-m-20 text-4xl font-bold tracking-tight', className)} {...props} />
    ),
    img: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <Image src="" alt="" width={370} height={210} className={cn('my-6 w-full', className)} {...props} />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <p className={cn('mb-6 text-xl leading-9 font-light text-dmds-3 dark:text-dmds-5', className)} {...props} />
    ),
    strong: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <strong className={cn('font-bold', className)} {...props} />
    )
}

interface MdxProps {
    code: string
}

export function Mdx({ code }: MdxProps): JSX.Element {
    const Component = useMDXComponent(code)

    return (
        <div className="my-6">
            <Component components={components} />
        </div>
    )
}
