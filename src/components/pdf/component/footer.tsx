import {Image, StyleSheet, Text, View} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopStyle: "solid",
        borderTopColor: "#E5E7EB",
        padding: 20
    },
    date: {
        fontSize: 10,
        color: "rgb(1 4 36 / 0.5)",
        fontWeight: "light"
    }
})

export default function PdfFooter({
    date
}: {date: string}) {
    return (
        <View style={styles.container}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.date}>Confidentiel - Usage interne</Text>
        </View>
    )
}