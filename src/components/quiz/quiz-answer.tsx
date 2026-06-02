interface QuizAnswerProps {
    onClick: (response: number) => void;
    currentAnswer: number | null;
}

const Answer = [
    {
        value: 0,
        title: "Conforme et documenté",
        description: "La règle ou mesure est officiellement formalisée, communiquée et auditée régulièrement."
    },
    {
        value: 1,
        title: "Partiellement mis en oeuvre",
        description: "Certaines pratiques existent mais ne sont ni formalisées, ni appliquées de manière systématique"
    },
    {
        value: 2,
        title: "Non initié ou inexistant",
        description: "Aucune démarche n'a été entamée sur ce point à l'heure actuelle"
    },
]

export default function QuizAnswer({
    onClick,
    currentAnswer,
}: QuizAnswerProps) {

    return (
        <section className="flex flex-col items-center gap-2">
            {Answer.map((key, index) => {
                const isActive = key.value === currentAnswer;
                 return (
                    <article key={index} onClick={() => onClick(key.value)} className={`flex items-center justify-start gap-2 border bg-slate-100 dark:bg-slate-800 rounded-xs px-4 py-6 w-full ${isActive ? "border-primary" : "border-slate-300 dark:border-slate-700"} cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-800/50`}>
                        {isActive ? (
                            <div className="flex items-center justify-center h-5 w-5 border border-slate-300 dark:border-slate-700 rounded-full">
                                <div className="h-2.5 w-2.5 rounded-full bg-primary/50"/>
                            </div>
                        ): (
                            <div className="h-5 w-5 border border-slate-300 dark:border-slate-700 rounded-full"/>
                        )}
                        <div className="flex flex-col gap-2">
                            <span className="text-xl font-normal text-slate-900 dark:text-slate-50">{key.title}</span>
                            <p className="text-md font-light text-slate-600 dark:text-slate-400">{key.description}</p>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}