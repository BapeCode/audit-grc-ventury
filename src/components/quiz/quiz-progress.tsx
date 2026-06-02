export default function QuizProgress({progress}: {progress: number}) {
    return (
        <section className="flex items-center justify-between w-full pb-3 border-b dark:border-slate-600 border-slate-300">
            <p className="dark:text-slate-300 text-slate-600 font-medium text-lg uppercase">Phase d&apos;analyse</p>
            <p className="dark:text-slate-200 text-slate-800 font-medium text-lg uppercase">Progression : {progress}/15</p>
        </section>
    )
}