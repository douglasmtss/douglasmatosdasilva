interface IconCrossProps {
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export const IconCross = ({ onClick }: IconCrossProps) => {

    return (
        <div onClick={onClick} className="relative origin-center">
            <div className="absolute rotate-45 w-6 h-1 dark:bg-dmds-5 bg-dmds-2"></div>
            <div className="absolute -rotate-45 w-6 h-1 dark:bg-dmds-5 bg-dmds-2"></div>
        </div>
    )
}