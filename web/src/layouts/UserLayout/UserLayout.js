import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { Generic, Image, Navbar, Container, Title, Footer } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

import logo from './diecut_mark.png'

const UserLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated } = useAuth()
  return (
    <>
      <Navbar color="info">
        <Navbar.Brand style={{ margin: '0 2rem' }}>
          <Navbar.Item as={Link} to={routes.home()}>
            <Title size={1} textColor="light">
              <FontAwesomeIcon icon={faFilm} /> FLIX
            </Title>
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Navbar.Item
              as={Link}
              to={routes.home()}
              textSize={5}
              style={{ paddingTop: '1.9rem' }}
            >
              All Movies
            </Navbar.Item>
          </Navbar.Segment>
          <Navbar.Segment align="end">
            <Navbar.Item
              href="#"
              onClick={isAuthenticated ? logOut : logIn}
              textSize={5}
              style={{ marginRight: '2rem', paddingTop: '1.9rem' }}
            >
              {isAuthenticated ? 'Log Out' : 'Log In'}
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
      <Generic as="main">
        <Container>{children}</Container>
      </Generic>
      <Footer
        backgroundColor="grey-dark"
        textColor="light"
        textAlign="centered"
      >
        Built by Forrest with
        <a href="https://redwoodjs.com/">
          <Image.Container
            size={16}
            style={{ display: 'inline-block', margin: '0 0.3em' }}
          >
            <Image src={logo} alt="Logo" />
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

export default UserLayout
