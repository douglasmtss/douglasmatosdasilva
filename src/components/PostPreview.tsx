'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import readingTime from 'reading-time'

interface PostPreviewProps {
    content: string
    href: string
    index: number
    image: string
    title: string
    description: string
    stats?: string
}

export default function PostPreview(props: PostPreviewProps): JSX.Element {
    const stats = readingTime(props.content)

    return (
        <a href={props.href} className="border-0 w-full md:w-96 md:ml-5 no-underline">
            <Animation index={`${props.index}`}>
                <div className="flex flex-col">
                    <div
                        style={{ backgroundImage: `url(${props.image})` }}
                        className="rounded-[8px] w-full md:w-[370px] h-[180px] mb-5 bg-cover bg-no-repeat bg-center filter-[grayscale(1)]"
                    />

                    <div className="max-w-md">
                        <h3 className="m-0 text-dmds-2">{props.title}</h3>
                        <p className="text-dmds-3 m-0 overflow-hidden">{props.description}</p>
                        <p className="mx-1 my-0 text-dmds-2 uppercase inline-block font-[500] text-[12px]">
                            {stats.text}
                        </p>
                    </div>
                </div>
            </Animation>
        </a>
    )
}

function Animation(props: { index: string; children: React.ReactNode }): JSX.Element {
    const [hovered, setHovered] = useState('')
    const isHovered = hovered === props.index

    return (
        <motion.div
            onHoverStart={() => setHovered(props.index)}
            onHoverEnd={() => setHovered('')}
            className="realative w-full p-5"
        >
            {isHovered && (
                <motion.div
                    layoutId="featuredArticles"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-0 left-0 right-0 bottom-0 z-[-1] rounded-md"
                />
            )}

            {props.children}
        </motion.div>
    )
}

// const Article = styled('a', {
//     border: '0',
//     width: '370px',
//     marginLeft: '20px',
//     textDecoration: 'none',
//     '&:hover': { opacity: 1 },
//     '&:first-child': { marginLeft: 0 }
// })

// const Container = styled('div', {
//     display: 'flex',
//     flexDirection: 'column'
// })

// const ImageContainer = styled('div', {
//     borderRadius: '8px',
//     width: '370px',
//     height: '180px',
//     marginBottom: '20px',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center center',
//     filter: 'grayscale(1)'
// })

// const Content = styled('div', {
//     maxWidth: '450px',
//     marginRight: '20px',
//     '@bp2': { maxWidth: '100%', marginRight: 0 }
// })

// const Title = styled('h3', {
//     color: '$primary',
//     margin: 0
// })

// const Description = styled('p', {
//     color: '$secondary',
//     display: '-webkit-box',
//     margin: 0,
//     WebkitLineClamp: '2',
//     WebkitBoxOrient: 'vertical',
//     overflow: 'hidden'
// })

// const Stats = styled('p', {
//     margin: '5px 0 0',
//     color: '$primary',
//     textTransform: 'uppercase',
//     display: 'inline-block',
//     fontWeight: 500,
//     letterSpacing: '1.2px',
//     fontSize: '12px'
// })

// const AnimContainer = styled(motion.div, {
//     position: 'relative',
//     width: '100%',
//     padding: '20px'
// })

// const AnimHovered = styled(motion.div, {
//     position: 'absolute',
//     top: '0',
//     left: '0',
//     right: '0',
//     bottom: '0',
//     background: '$hover',
//     borderRadius: '$borderRadius',
//     zIndex: -1
// })
