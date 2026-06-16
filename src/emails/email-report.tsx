import {Html, Body, Container, Text, Tailwind, Heading, Img} from 'react-email'

export default function EmailReport({
    firstname,
    lastname,
    phone,
    email,
    company,
    grade,
    message
}: {firstname: string; lastname: string; phone: string; email: string; company: string, grade?: string, message?: string}) {
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
                            Vous avez reçu un nouveau rapport de pré-audit de la part de l&apos;entreprise &quot;{company}&quot;.
                        </Text>
                    </Container>

                    <Container>
                        <Text className="text-sm font-medium text-muted">
                            Nom : {lastname}
                        </Text>
                        <Text className="text-sm font-medium text-muted">
                            Prénom : {firstname}
                        </Text>
                        <Text className="text-sm font-medium text-muted">
                            Téléphone : {phone}
                        </Text>
                        <Text className="text-sm font-medium text-muted">
                            Email : {email}
                        </Text>
                        <Text className="text-sm font-medium text-muted">
                            Entreprise & Poste : {company} - {grade}
                        </Text>
                    </Container>

                    <Container className="bg-slate-200 rounded-[4px] px-4 py-1">
                        <Text className="text-muted text-sm font-normal">{message}</Text>
                    </Container>

                    <Container className="flex items-center justify-center p-2 border-t border-text/10 mt-6">
                        <Text className="text-xs font-normal text-muted"></Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

EmailReport.PreviewProps = {
    email: "mathieu@venturytechnology.fr",
    firstname: "Mathieu",
    lastname: "Forest",
    phone: "0699381236",
    company: "MF-Consulting",
    grade: "CEO",
    message: "Nous cherchons à nous mettre en conformité RGPD et ISO 27001 avant fin 2026. Disponible pour un échange la semaine prochaine."
}