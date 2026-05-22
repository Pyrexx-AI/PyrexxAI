import * as React from "react";
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
  Tailwind,
} from "@react-email/components";

interface ContactTemplateProps {
  name: string;
  email: string;
  clinic: string;
  message: string;
}

export default function ContactTemplate({
  name,
  email,
  clinic,
  message,
}: ContactTemplateProps) {
  const previewText = `New PyrexxAI Inquiry from ${name} at ${clinic}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans text-gray-900">
          <Container className="bg-white border border-gray-200 rounded-xl my-10 mx-auto p-8 max-w-xl">
            <Heading className="text-2xl font-bold text-blue-600 mb-6">
              New Enterprise Inquiry
            </Heading>
            <Section className="mb-6">
              <Text className="text-base leading-relaxed mb-2">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="text-base leading-relaxed mb-2">
                <strong>Email:</strong> {email}
              </Text>
              <Text className="text-base leading-relaxed mb-2">
                <strong>Clinic/Organization:</strong> {clinic}
              </Text>
            </Section>
            <Hr className="border-gray-200 my-6" />
            <Section>
              <Text className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Message Scope
              </Text>
              <Text className="text-base leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">
                {message}
              </Text>
            </Section>
            <Hr className="border-gray-200 my-6" />
            <Text className="text-xs text-gray-400 text-center">
              This is an automated lead capture notification from PyrexxAI.com (Server Action).
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}