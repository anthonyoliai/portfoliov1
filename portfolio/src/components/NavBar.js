import { LinkContainer } from 'react-router-bootstrap'
import React from 'react'

const NavBar = () => {
  return (
    <div className='nav-wrapper'>
      <div className='side-nav'>
        <div className='nav-element'>
          <LinkContainer to='/'>
            <img src='/images/icons/home.svg'></img>
          </LinkContainer>
          <LinkContainer to='/'>
            <h2>Home</h2>
          </LinkContainer>
        </div>
        <div className='nav-element'>
          <LinkContainer to='/about'>
            <img src='/images/icons/about.svg'></img>
          </LinkContainer>
          <LinkContainer to='/about'>
            <h2>About</h2>
          </LinkContainer>
        </div>
        <div className='nav-element'>
          <LinkContainer to='/skills'>
            <img src='/images/icons/skills.svg'></img>
          </LinkContainer>
          <LinkContainer to='/skills'>
            <h2>Experience</h2>
          </LinkContainer>
        </div>
        <div className='nav-element'>
          <LinkContainer to='/projects'>
            <img src='/images/icons/projects.svg'></img>
          </LinkContainer>

          <LinkContainer to='/projects'>
            <h2>Projects</h2>
          </LinkContainer>
        </div>

        <div className='nav-element'>
          <LinkContainer to='/contact'>
            <img src='/images/icons/contact.svg'></img>
          </LinkContainer>

          <LinkContainer to='/contact'>
            <h2>Contact</h2>
          </LinkContainer>
        </div>
      </div>
      <div className='media-container'>
        <a href='/contact'>
          <img src='/images/icons/footer-mail.svg'></img>
        </a>
        <a href='https://www.linkedin.com/in/anthony-oliai-52315118b/'>
          {' '}
          <img src='/images/icons/linkedin.svg'></img>
        </a>
        <a href='https://github.com/anthonyoliai'>
          {' '}
          <img src='/images/icons/github.svg'></img>
        </a>
      </div>
      <div></div>
    </div>
  )
}

export default NavBar
