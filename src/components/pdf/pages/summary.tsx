import {Image, StyleSheet, Text, View} from "@react-pdf/renderer";
import PdfHeader from "@/components/pdf/component/header";
import Pages from "@/components/pdf/component/page";
import PdfFooter from "@/components/pdf/component/footer";
import Container from "@/components/pdf/component/container";
import {SummaryProps} from "@/types/props.type";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },

    text_title: {
      fontSize: 12,
      fontWeight: "medium",
      color: "rgb(1 4 36 / 0.5)"
    },
    text_score: {
        fontSize: 48,
        fontWeight: "bold",
        color: "#2A32FF"
    },
    text_maxScore: {
        fontSize: 16,
        fontWeight: "light",
        color: "rgb(1 4 36 / 0.5)"
    },
    text_level: {
        fontSize: 10,
        fontWeight: "normal",
        color: "#2A32FF"
    },
    text_description: {
        fontSize: 14,
        fontWeight: "normal",
        color: "rgb(1 4 36 / 0.5)"
    },
    text_conformity: {
        fontSize: 14,
        fontWeight: "semibold",
        color: "#2A32FF"
    },

    image: {
        height: "100%",
        width: "50%",
    },
    bar_chart: {
        height: "auto",
        width: "50%"
    },

    view_score: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 6
    },
    view_level: {
        display: "flex",
        alignItems: "center",
        paddingHorizontal: 6,
        paddingVertical: 4,
        backgroundColor: "rgb(42 50 255 / 0.2)",
        borderRadius: 4,
        borderColor: "#2A32FF",
        borderWidth: 1,
        borderStyle: "solid"
    },
    view_detail: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        width: "100%",
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
        marginTop: 12
    },
    view_image: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
        height: 180
    },
    view_barChart: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flex: 1
    }
})

export default function Summary({
    score,
    maxScore,
    level,
    description,
    conformity,
    critical,
    domainWeak,
    domainStrong,
    radar,
    pie,
    bar
}: SummaryProps) {
    return (
        <Pages>
            <PdfHeader/>
            <Container style={{
                justifyContent: "flex-start"
            }}>
                <Text style={styles.text_title}>Maturité globale</Text>
                <View style={styles.view_score}>
                    <Text style={styles.text_score}>
                        {score}
                        <Text style={styles.text_maxScore}>/{maxScore}</Text>
                    </Text>

                    <View style={styles.view_level}>
                        <Text style={styles.text_level}>Niveau : {level}</Text>
                    </View>

                    <Text style={styles.text_description}>{description}</Text>
                </View>

                <View style={styles.view_detail}>
                    <View style={styles.view_card}>
                        <Text style={styles.text_title}>Conformité</Text>
                        <Text style={styles.text_conformity}>{conformity}%</Text>
                    </View>
                    <View style={styles.view_card}>
                        <Text style={styles.text_title}>Points critiques</Text>
                        <Text style={styles.text_conformity}>{critical}</Text>
                    </View>
                    <View style={styles.view_card}>
                        <Text style={styles.text_title}>Domaine fort</Text>
                        <Text style={styles.text_conformity}>{domainStrong}</Text>
                    </View>
                    <View style={styles.view_card}>
                        <Text style={styles.text_title}>Domaine faible</Text>
                        <Text style={styles.text_conformity}>{domainWeak}</Text>
                    </View>
                </View>
                <View style={styles.view_image}>
                    <Image style={styles.image} src={radar} />
                    <Image style={styles.image} src={pie} />
                </View>
                <View style={styles.view_barChart}>
                    <Image style={styles.bar_chart} src={bar} />
                </View>
            </Container>
            <PdfFooter/>
        </Pages>
    )
}