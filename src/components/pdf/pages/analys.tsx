import Pages from "@/components/pdf/component/page";
import PdfHeader from "@/components/pdf/component/header";
import PdfFooter from "@/components/pdf/component/footer";
import Container from "@/components/pdf/component/container";
import {StyleSheet, Text, View} from "@react-pdf/renderer";
import {CalculateProps} from "@/types/props.type";
import {AnswerState} from "@/types/answer.type";
import {ANSWER_CONFIG} from "@/data/answer.data";
import {QUESTIONS} from "@/data/question.data";

const styles = StyleSheet.create({
    text_title: {
        fontSize: 12,
        fontWeight: "medium",
        color: "rgb(1 4 36 / 0.5)",
    },
    text_domain: {
        fontSize: 10,
        fontWeight: "medium",
        color: "rgb(1 4 36)",
        width: 100
    },
    text_score: {
        fontSize: 10,
        fontWeight: "medium",
        color: "rgb(1 4 36 / 0.5)",
        width: 50,
        textAlign: "right"
    },


    view_container: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
    },
    view_items: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        gap: 8
    },
    view_progress: {
        flex: 1,
        height: 5,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 1000,
    },
    view_progress_bar: {
        backgroundColor: "#2A32FF",
        borderRadius: 5,
        height: 5,
    },

    table_header: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F8F9FF",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E7EB",
        width: "100%"
    },
    table_row: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E7EB",
        borderBottomStyle: "solid",
        width: "100%",
        gap: 12
    },
    cell: {
        fontSize: 10,
    },
    cell_large: { flex: 3 },
    cell_small: { flex: 1 }
})

export default function Analysis({
    scoreByDomain,
    answer
}: {scoreByDomain: CalculateProps[], answer: AnswerState[]}) {
    return (
        <Pages>
            <PdfHeader/>

            <Container style={{
                justifyContent: "flex-start"
            }}>
                <Text style={styles.text_title}>Score par domaine</Text>

                <View style={styles.view_container}>
                    {scoreByDomain.map((value) => {
                        const percentage = (value.score / value.maxScore) * 100;
                        return (
                            <View key={value.domain} style={styles.view_items}>
                                <Text style={styles.text_domain}>{value.domain}</Text>
                                <View style={styles.view_progress}>
                                    {percentage ? (
                                        <View style={[styles.view_progress_bar, {
                                            width: `${percentage}%`
                                        }]}></View>
                                    ): null}
                                </View>

                                <Text style={styles.text_score}>{value.score}/{value.maxScore}</Text>
                            </View>

                        )
                    })}
                </View>

                <Text style={styles.text_title}>Détail des réponses</Text>

                <View style={styles.table_header}>
                    <Text style={[styles.cell, styles.cell_large]}>Question</Text>
                    <Text style={[styles.cell, styles.cell_small]}>Réponse</Text>
                    <Text style={[styles.cell, styles.cell_small]}>Points</Text>
                </View>

                {answer.map((item, index) => {
                    const questions = QUESTIONS.find(v => v.id === item.questionId)
                    return (
                        <View wrap={false} key={index} style={styles.table_row}>
                            <Text style={[styles.cell, styles.cell_large]}>{questions?.text}</Text>
                            <Text style={[styles.cell, styles.cell_small]}>{ANSWER_CONFIG[item.answer].label}</Text>
                            <Text style={[styles.cell, styles.cell_small]}>{item.points}</Text>
                        </View>
                    )
                })}
            </Container>

            <PdfFooter/>
        </Pages>
    )
}