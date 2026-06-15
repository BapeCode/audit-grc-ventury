import Container from "@/components/pdf/component/container";
import {StyleSheet, Text, View} from "@react-pdf/renderer";
import Pages from "@/components/pdf/component/page";
import PdfHeader from "@/components/pdf/component/header";
import PdfFooter from "@/components/pdf/component/footer";
import {AnswerState} from "@/types/answer.type";
import {ANSWER_CONFIG, BADGES_STYLES, EFFORT} from "@/data/answer.data";


const styles = StyleSheet.create({
    text_title: {
        fontSize: 12,
        fontWeight: "medium",
        color: "rgb(1 4 36 / 0.5)"
    },
    text_critical: {
        fontSize: 8,
        fontWeight: "medium",
    },
    text_effort: {
      fontSize: 8,
      fontWeight: "medium",
      color: "rgb(1 4 36 / 0.5)",
    },
    text_domaine: {
      fontSize: 12,
      fontWeight: "semibold",
      color: "rgb(1 4 36)",
    },
    text_action: {
        fontSize: 10,
        fontWeight: "normal",
        color: "rgb(1 4 36 / 0.5)",
    },
    text_description: {
        fontSize: 10,
        fontWeight: "normal",
        color: "rgb(1 4 36 / 0.8)",
    },
    text_reference: {
        fontSize: 8,
        fontWeight: "normal",
        color: "rgb(42 50 255 / 0.5)"
    },


    view_container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: 8,
    },
    view_card: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        gap: 4,
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
        borderColor: "#E5E7EB",
        borderWidth: 1,
        borderStyle: "solid",
        padding: 12,
        marginTop: 12,
    },
    view_card_header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    view_card_header_critical: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 1000,
    }
})

export default function Remediation({
    answer
}: {answer: AnswerState[]}) {

    return (
        <Pages>
            <PdfHeader/>

            <Container style={{
                justifyContent: "flex-start"
            }}>
                <Text style={styles.text_title}>Plan d'action priorisé</Text>

                <View style={styles.view_container}>
                    {answer.map((item, index) => {
                        const config = ANSWER_CONFIG[item.answer]
                        const BadgeStyle = BADGES_STYLES[item.recommandation.effort]

                        return (
                            <View wrap={false} key={index} style={styles.view_card}>
                                <View style={styles.view_card_header}>
                                    <View style={[styles.view_card_header_critical, {backgroundColor: BadgeStyle.backgroundColor}]}>
                                        <Text style={[styles.text_critical, {color: BadgeStyle.color}]}>{config.label}</Text>
                                    </View>
                                    <Text style={styles.text_effort}>Effort : {EFFORT[item.recommandation.effort]}</Text>
                                </View>
                                <Text style={styles.text_domaine}>{item.domain}</Text>
                                <Text style={styles.text_action}>{item.recommandation.action}</Text>
                                <Text style={styles.text_description}>{item.recommandation.description}</Text>
                                <Text style={styles.text_reference}>Référence : {item.recommandation.reference}</Text>
                            </View>
                        )
                    })}
                </View>

            </Container>

            <PdfFooter/>
        </Pages>
    )
}