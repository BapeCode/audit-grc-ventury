import Cards from "@/components/ui/card";
import {ResultBarProps} from "@/types/props.type";
import {Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export default function ResultBar({
    data
}: ResultBarProps) {
    return (
        <Cards title="Charge de travail estimée">
            <ResponsiveContainer width={"100%"} height={300}>
                <BarChart data={data} responsive>
                    <XAxis dataKey="effort"/>
                    <YAxis hide/>

                    <Tooltip cursor={false}/>
                    <Bar
                        dataKey={"count"}
                        barSize={20}
                        label={{
                            position: "top",
                            fill: "#666"
                        }}
                        activeBar={false}
                    />
                </BarChart>
            </ResponsiveContainer>
        </Cards>
    )
}