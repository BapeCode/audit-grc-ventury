import {StyleSheet, View, Text} from "@react-pdf/renderer"
import {CoverProps} from "@/types/props.type";
import PdfHeader from "@/components/pdf/component/header";
import PdfFooter from "@/components/pdf/component/footer";
import Pages from "@/components/pdf/component/page";
import Container from "@/components/pdf/component/container";

const styles = StyleSheet.create({
    title: {
        fontSize: 12,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "rgb(1 4 36 / 0.5)"
    },
    subtitle: {
        fontSize: 22,
        fontWeight: "medium",
        color: "rgb(1 4 36)"
    },
    company: {
        fontSize: 22,
        color: "#2A32FF",
        fontWeight: "semibold"
    },
    organisation: {
      fontSize: 14,
      color: "rgb(1 4 36 / 0.5)",
        fontWeight: "normal"
    },
    footer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        padding: 20,
        borderTop: "1px solid rgba(0,0,0,0.08)"
    },
})


export function Cover({
    company,
}: CoverProps) {
    return (
        <Pages>
            <PdfHeader/>

            <Container>
                <Text style={styles.title}>Rapport de maturité cybersécurité</Text>
                <Text style={styles.subtitle}>
                    Pré-audit de {"\n"} sécurité pour <Text style={styles.company}>{company}</Text>
                </Text>
                <Text style={styles.organisation}>Commandité par Ventury Technology</Text>
            </Container>

            <PdfFooter/>
        </Pages>
    )
}