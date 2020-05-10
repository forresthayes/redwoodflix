import { Link, routes } from '@redwoodjs/router'
import { Navbar, Section, Container, Title } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

const ApplicationLayout = ({ children }) => {
  return (
    <>
      <Navbar color="info">
        <Navbar.Brand>
          <Navbar.Item as={Link} to={routes.home()}>
            <Title size={1} textColor="light">
              <FontAwesomeIcon icon={faFilm} /> FLIX
            </Title>
          </Navbar.Item>
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Navbar.Item
              as={Link}
              to={routes.home()}
              textColor="light"
              textSize={5}
              style={{ paddingTop: '1.9rem', marginLeft: '2rem' }}
            >
              All Movies
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
      <Container>
        <Section>{children}</Section>
      </Container>
    </>
  )
}

export default ApplicationLayout
