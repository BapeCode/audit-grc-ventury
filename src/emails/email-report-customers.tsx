import {Html, Body, Container, Text, Tailwind, Heading, Img} from 'react-email'

export default function EmailReportCustomers({
    firstname,
    lastname
}: {firstname: string, lastname: string}) {
    const date = new Date().toLocaleDateString();
    return (
        <Html>
            <Tailwind config={{
                theme: {
                    extend: {
                        colors: {
                            primary: "#2A32FF",
                            text: "#010424",
                            background: "#F8F9FF",
                            muted: "#80829A",
                        }
                    }
                }
            }}>
                <Body className="font-sans p-4">
                    <Container className="mb-7">
                        <Img
                            src="http://localhost:3000/logo-dark.png"
                            alt="Ventury Technology"
                            width={200}
                            height={50}
                        />
                    </Container>
                    <Container className="flex flex-col items-start justify-center gap-2">
                        <Text className="text-left text-muted uppercase text-sm font-medium">{date} - Rapport PDF en pièce jointe</Text>
                        <Heading className="text-left text-text text-4xl font-bold">Nouveau pré-audit</Heading>
                        <Text className="text-left text-muted text-sm">
                            Bonjour {lastname} {firstname}. Merci d&apos;avoir réalisé votre pré-audit de maturité cybersécurité avec Ventury Technology. Votre rapport personalisé est disponible en pièce jointe.
                        </Text>
                    </Container>

                    <Container className="flex items-center justify-center p-2 border-t border-text/10 mt-6">
                        <Text className="text-xs font-normal text-muted"></Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

EmailReportCustomers.PreviewProps = {
    email: "mathieu@venturytechnology.fr",
    firstname: "Mathieu",
    lastname: "Forest"
}