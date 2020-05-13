import { Link, routes } from '@redwoodjs/router'
import { Generic, Image, Navbar, Container, Title, Footer } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

const ApplicationLayout = ({ children }) => {
  return (
    <>
      <Navbar color="info">
        <Navbar.Brand style={{ margin: '0 2rem' }}>
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
              style={{ paddingTop: '1.9rem' }}
            >
              All Movies
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
      <Generic as="main" backgroundColor="white-ter">
        <Container>{children}</Container>
      </Generic>
      <Footer
        backgroundColor="grey-dark"
        textColor="light"
        textAlign="centered"
      >
        Built by Forrest with{' '}
        <a href="https://redwoodjs.com/">
          <Image.Container
            size={16}
            style={{ display: 'inline-block', margin: '0 0.3em' }}
          >
            <Image src="/logo.svg" alt="Logo" />
          </Image.Container>
          RedwoodJS
        </a>
        <br />
        Inspired by{' '}
        <a href="https://pragmaticstudio.com/">The Pragmatic Studio</a>
      </Footer>
    </>
  )
}

export default ApplicationLayout
