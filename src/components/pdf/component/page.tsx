import {ReactNode} from "react";
import {Page, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#F8F9FF",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        fontFamily: "Roboto"
    },
})

export default function Pages({
    children
}: {children: ReactNode}) {
    return (
        <Page size="A4" style={styles.page}>
            {children}
        </Page>
    )
}