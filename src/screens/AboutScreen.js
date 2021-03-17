import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import NavBar from '../components/NavBar'
import React from 'react'

const AboutScreen = () => {
  return (
    <div className='main-screen'>
      <NavBar></NavBar>
      <div className='screen-body'>
        <Fade left>
          <div className='about-container'>
            <div className='about-text'>
              <h2 style={{ color: '#E83E7B' }}>About</h2> &nbsp;
              <h2 style={{ color: 'white' }}>me.</h2>
              <p>
                Passionate Full-Stack Developer from Amsterdam, The Netherlands.
                <br></br>
                Computer Science graduate from the Vrije Universiteit in
                Amsterdam.
              </p>
              <p>
                Always eager to learn about the newest technologies accross the
                stack. Independent, organised and a problem solver. Avid
                believer of Blockchain technology, smart contracts, and
                decentralized finance. Currently doing voluntary work for
                Cryptocurrency projects, such as the Token Engineering Commons
                and 1Hive.{' '}
              </p>
              <button>Download CV</button>
            </div>
          </div>
        </Fade>

        <Bounce delay={200}>
          <div className='overflow'>
            <img
              className='spinning-planet'
              src='/images/spinning-planet.svg'
            ></img>
          </div>
        </Bounce>
      </div>
    </div>
  )
}

export default AboutScreen
