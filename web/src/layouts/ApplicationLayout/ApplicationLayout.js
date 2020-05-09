import { Navbar, Section, Container, Title } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

const ApplicationLayout = ({ children }) => {
  return (
    <>
      <Navbar color="link">
        <Navbar.Brand>
          <Navbar.Item>
            <Title size={1} className="has-text-light">
              <FontAwesomeIcon icon={faFilm} /> FLIX
            </Title>
          </Navbar.Item>
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Section>{children}</Section>
      </Container>
    </>
  )
}

export default ApplicationLayout
