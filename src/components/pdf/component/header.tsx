import {Image, StyleSheet, Text, View} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: "#E5E7EB",
        padding: 20
    },
    logo: {
        width: 100
    },
    text: {
        fontSize: 10,
        color: "rgb(1 4 36 / 0.5)",
        fontWeight: "light"
    }
})

export default function PdfHeader() {
    return (
        <View style={styles.container}>
            <Image src={"/logo-dark.png"} style={styles.logo}/>
            <Text style={styles.text} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
            )} />

        </View>
    )
}