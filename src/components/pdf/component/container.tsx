import {ReactNode} from "react";
import {StyleSheet, View} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    container: {
        padding: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1,
        gap: 12,
    },
})

export default function Container({
    children,
    style,
}: {children: ReactNode, style?: Record<string, any>}) {
    return (
        <View style={[styles.container, style!]}>
            {children}
        </View>
    )
}