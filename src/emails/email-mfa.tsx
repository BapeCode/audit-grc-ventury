import {Html, Body, Container, Text, Tailwind, Heading, Img} from 'react-email'

export default function EmailMfa({
    code,
    email
}: {code: string, email: string}) {
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
                        <Text className="text-left text-muted uppercase text-sm font-medium">Vérification de votre identité</Text>
                        <Heading className="text-left text-text text-4xl font-bold">Confirmation du mail</Heading>
                        <Text className="text-left text-muted text-sm">
                            Votre code de confirmation est ci-dessous, entrez le dans votre navigateur pour accéder à votre rapport de maturité cybersécurité.
                        </Text>
                    </Container>

                    <Container className="flex items-center justify-center w-full p-6 bg-slate-200">
                        <Text className="text-5xl font-semibold text-primary text-center">{code}</Text>
                        <Text className="text-sm font-medium text-muted">Ce code expire dans 10 minutes</Text>
                    </Container>

                    <Container className="flex items-center justify-center p-2 border-t border-text/10 mt-6">
                        <Text className="text-xs font-normal text-muted">Cet email a été envoyé à {email} dans le cadre de votre audit de maturité cybersécurité.</Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

EmailMfa.PreviewProps = {
    code: "840202",
    email: "ma*****@venturytechnology.fr"
}