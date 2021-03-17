import Fade from 'react-reveal/Fade'
import NavBar from '../components/NavBar'
import React from 'react'
import { useHistory } from 'react-router-dom'

const HomeScreen = () => {
  const history = useHistory()
  return (
    <div className='main-screen'>
      <NavBar></NavBar>
      <Fade>
        <div className='screen-body'>
          <div className='welcome-container'>
            <h2 style={{ color: '#E83E7B' }}>Hello</h2>
            <h2 style={{ color: 'white' }}>!</h2>
            <br></br>
            <h2 style={{ color: '#E83E7B' }}>I am</h2> &nbsp; &nbsp;
            <h2 style={{ color: 'white' }}>Anthony</h2>
            <h2 style={{ color: '#E83E7B' }}>,</h2>
            <br></br>
            <h2 style={{ color: '#E83E7B' }}>
              a full stack developer<span style={{ color: 'white' }}>.</span>
            </h2>
            <br></br>
            <p>Frontend / Backend/ Mern stack</p>
            <button onClick={() => history.push('/contact')}>CONTACT ME</button>
          </div>

          <img
            className='blue-ball floating-2'
            src='/images/blue-ball.svg'
          ></img>
          <img
            className='purple-ball floating-2'
            src='/images/purple-ball.svg'
          ></img>
          <img className='pink-ball floating' src='/images/pink-ball.svg'></img>
          <img
            className='yellow-ball floating'
            src='/images/yellow-ball.svg'
          ></img>
        </div>
      </Fade>
    </div>
  )
}

export default HomeScreen
