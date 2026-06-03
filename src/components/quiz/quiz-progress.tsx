"use client"

interface QuizProgressProps {
    maxIndex: number;
    globalIndex: number
}

export default function QuizProgress({
    maxIndex,
    globalIndex
}: QuizProgressProps) {
    return (
        <section className="flex items-center justify-between w-full pb-3 border-b border-border">
            <p className="text-text/50 font-medium text-sm md:text-lg">Phase d&apos;analyse</p>
            <p className="text-text font-medium text-sm md:text-lg">
                Progression : <span className="text-primary">{globalIndex}</span>/{maxIndex}
            </p>
        </section>
    )
}