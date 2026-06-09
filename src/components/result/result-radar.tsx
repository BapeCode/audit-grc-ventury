import Cards from "@/components/ui/ui/card";
import {RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip} from "recharts"
import {ResultRadarProps} from "@/types/props.type";

export default function ResultRadar({
    data
}: ResultRadarProps) {
    return (
        <Cards title="Grahique du score par domaine" className="col-span-2">
            <ResponsiveContainer width="100%" height={300}>
                <RadarChart
                    data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="domain" />
                    <Radar dataKey="score" name={"Score"} className="stroke-primary fill-primary" fillOpacity={0.5}/>
                    <Tooltip/>
                </RadarChart>
            </ResponsiveContainer>
        </Cards>
    )
}