import {ResultPieProps} from "@/types/props.type";
import Cards from "@/components/ui/ui/card";
import {Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import {ANSWER_CONFIG} from "@/data/answer.data";

export default function ResultPie({
    data
}: ResultPieProps) {

    return (
        <Cards title="Répartition des réponses">
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="amount"
                        nameKey="answer"
                        cy="50%"
                        cx="50%"
                        innerRadius={60}
                        outerRadius={100}
                    />
                    <Tooltip/>
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
        </Cards>
    )
}