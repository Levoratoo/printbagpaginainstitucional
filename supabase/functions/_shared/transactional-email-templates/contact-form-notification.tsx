import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Section, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Printbag"

interface ContactFormNotificationProps {
  nome?: string
  empresa?: string
  assunto?: string
  email?: string
  telefone?: string
  tipoEmbalagem?: string
  volume?: string
  mensagem?: string
}

const ContactFormNotificationEmail = (props: ContactFormNotificationProps) => {
  const {
    nome = 'Não informado',
    empresa,
    assunto = 'Não informado',
    email = 'Não informado',
    telefone = 'Não informado',
    tipoEmbalagem,
    volume,
    mensagem,
  } = props

  return (
    <Html lang="pt-BR" dir="ltr">
      <Head />
      <Preview>Nova mensagem de contato: {assunto}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nova Mensagem de Contato</Heading>
          <Text style={label}>Assunto</Text>
          <Text style={value}>{assunto}</Text>

          <Hr style={hr} />

          <Text style={label}>Nome</Text>
          <Text style={value}>{nome}</Text>

          {empresa && (
            <>
              <Text style={label}>Empresa</Text>
              <Text style={value}>{empresa}</Text>
            </>
          )}

          <Text style={label}>E-mail</Text>
          <Text style={value}>{email}</Text>

          <Text style={label}>Telefone</Text>
          <Text style={value}>{telefone}</Text>

          {tipoEmbalagem && (
            <>
              <Hr style={hr} />
              <Text style={label}>Tipo de Embalagem</Text>
              <Text style={value}>{tipoEmbalagem}</Text>
            </>
          )}

          {volume && (
            <>
              <Text style={label}>Volume Estimado</Text>
              <Text style={value}>{volume}</Text>
            </>
          )}

          {mensagem && (
            <>
              <Hr style={hr} />
              <Text style={label}>Mensagem</Text>
              <Text style={value}>{mensagem}</Text>
            </>
          )}

          <Hr style={hr} />
          <Text style={footer}>
            Esta mensagem foi enviada pelo formulário de contato do site {SITE_NAME}.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: ContactFormNotificationEmail,
  subject: (data: Record<string, any>) => `[Contato] ${data.assunto || 'Nova mensagem'}`,
  displayName: 'Notificação de contato',
  previewData: {
    nome: 'Maria Silva',
    empresa: 'Loja Exemplo',
    assunto: 'Fazer um orçamento',
    email: 'maria@exemplo.com',
    telefone: '(47) 99999-0000',
    tipoEmbalagem: 'Sacolas de Papel',
    volume: '5.000 a 10.000 unidades',
    mensagem: 'Gostaria de um orçamento para sacolas personalizadas.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Sora', 'Inter', Arial, sans-serif" }
const container = { padding: '32px 28px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: '700' as const, color: '#1a2332', margin: '0 0 24px', borderLeft: '4px solid #2d8a4e', paddingLeft: '12px' }
const label = { fontSize: '11px', fontWeight: '600' as const, color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '16px 0 2px' }
const value = { fontSize: '15px', color: '#1a2332', margin: '0 0 4px', lineHeight: '1.5' }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
const footer = { fontSize: '12px', color: '#9ca3af', margin: '24px 0 0' }
