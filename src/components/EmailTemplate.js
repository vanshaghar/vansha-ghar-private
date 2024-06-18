import { Html, Button, Container, Tailwind, Text, Heading, Section } from "@react-email/components";

const EmailTemplate = ({ name, phone, email, message }) => {
    return (
        <Html lang="en" dir="ltr">
            <Tailwind>
                <Container className="my-6 mx-auto p-6 bg-white border border-gray-200 rounded-lg">
                    <Heading className="text-2xl font-bold mb-4">New Contact Form Submission</Heading>

                    <Section className="mb-4">
                        <Text className="text-lg font-semibold">Name:</Text>
                        <Text>{name}</Text>
                    </Section>

                    <Section className="mb-4">
                        <Text className="text-lg font-semibold">Phone:</Text>
                        <Text>{phone}</Text>
                    </Section>

                    <Section className="mb-4">
                        <Text className="text-lg font-semibold">Email:</Text>
                        <Text>{email}</Text>
                    </Section>

                    <Section className="mb-4">
                        <Text className="text-lg font-semibold">Message:</Text>
                        <Text>{message}</Text>
                    </Section>

                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                        href="mailto:your@email.com"
                    >
                        Reply
                    </Button>
                </Container>
            </Tailwind>
        </Html>
    );
};

export default EmailTemplate;