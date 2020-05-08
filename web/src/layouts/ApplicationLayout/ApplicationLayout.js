import { Section, Container, Title } from 'rbx'

const ApplicationLayout = ({ children }) => {
  return (
    <Section>
      <Container>
        <Title>FLIX</Title>
        <main>{children}</main>
      </Container>
    </Section>
  )
}

export default ApplicationLayout
