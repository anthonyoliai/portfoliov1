import BasicTimeLine from '../components/BasicTimeLine'
import Fade from 'react-reveal/Fade'
import NavBar from '../components/NavBar'
import React from 'react'

const ExperienceScreen = () => {
  return (
    <div className='main-screen'>
      <NavBar></NavBar>
      <div className='screen-body'>
        <div className='experience-container'>
          <Fade left>
            <div className='experience-text-wrapper'>
              <h2 style={{ color: '#E83E7B' }}>Skills</h2> &nbsp;
              <h2 style={{ color: 'white' }}>&</h2> &nbsp;
              <h2 style={{ color: '#E83E7B' }}>experience</h2>
              <h2 style={{ color: 'white' }}>.</h2>
              <div className='experience-text'>
                <h3 style={{ color: '#E83E7B' }}>Front-end</h3>
                <p>HTML/CSS | JavaScript | React | Redux | Bootstrap</p>
                <h3 style={{ color: '#E83E7B' }}>Back-end</h3>
                <p>MongoDB | Mongoose | Express.js | Node.js</p>
                <h3 style={{ color: '#E83E7B' }}>Other</h3>
                <p>Java | Python | Solidity | Figma | Git </p>
                <h3 style={{ color: '#E83E7B' }}>Certificates</h3>
                <p>
                  {' '}
                  <a href='https://www.udemy.com/certificate/UC-aec69e2b-a5f8-4d92-bdec-91b2a401f0eb/'>
                    MERN eCommerce from Scratch &nbsp;
                  </a>
                  | &nbsp;
                  <a href='https://www.udemy.com/certificate/UC-8116e6a5-8b47-4895-9abb-e7bb5b4a0da9/'>
                    Just Express &nbsp;
                  </a>
                  | &nbsp;
                  <a href='https://www.udemy.com/certificate/UC-85e43005-50ba-47c4-b088-db8377ce1e16/'>
                    Blockchain AZ™
                  </a>
                </p>
              </div>
            </div>
          </Fade>

          <Fade right>
            <BasicTimeLine></BasicTimeLine>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default ExperienceScreen
