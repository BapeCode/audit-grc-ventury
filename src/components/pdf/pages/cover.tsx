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
    text_title: {
        fontSize: 12,
        fontWeight: "medium",
        color: "rgb(1 4 36 / 0.5)"
    },
    text_content: {
      fontSize: 10,
      fontWeight: "normal",
      color: "rgb(1 4 36)"
    },
    text_content_bold: {
        fontSize: 10,
        fontWeight: "bold",
        color: "rgb(1 4 36)"
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
    view_user: {
        display: "flex",
        flexDirection: "column",
        gap: 8
    }
})


export function Cover({
    company,
    name,
    email,
    phone,
    grade,
    message
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
                <View style={styles.view_user}>
                    <Text style={styles.text_title}>Utilisateur</Text>
                    <Text style={styles.text_content}>
                        Nom & Prénom : <Text style={styles.text_content_bold}>{name}</Text>
                    </Text>
                    <Text style={styles.text_content}>
                        Email : <Text style={styles.text_content_bold}>{email}</Text>
                    </Text>
                    <Text style={styles.text_content}>
                        Téléphone : <Text style={styles.text_content_bold}>{phone}</Text>
                    </Text>
                    <Text style={styles.text_content}>
                        Poste : <Text style={styles.text_content_bold}>{grade}</Text>
                    </Text>
                    {message.length > 0 && (
                        <Text style={styles.text_content}>
                            Message : <Text style={styles.text_content_bold}>{message}</Text>
                        </Text>
                    )}
                </View>
            </Container>

            <PdfFooter/>
        </Pages>
    )
}