import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function EmailContact({ name, senderEmail, message }) {
  return (
    <Html>
      <Head />
      <Preview>New message for Stone Ducky</Preview>
      <Body>
        <Container>
          <Section
            style={{
              backgroundColor: "#FFFFFF",

              margin: "40px 0",
              padding: "20px 40px",
              borderRadius: "8px",
              color: "#143452",
            }}
          >
            <Heading style={{ fontSize: "24px", lineHeight: "1.4" }}>
              You received the following message from {name}:
            </Heading>
            <Text style={{ fontSize: "16px" }}>{message}</Text>
            <Hr />
            <Text style={{ fontSize: "16px" }}>Reply to: {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
