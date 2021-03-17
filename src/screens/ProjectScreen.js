import NavBar from '../components/NavBar'
import ProjectComponent from '../components/ProjectComponent'
import React from 'react'

const ProjectScreen = () => {
  return (
    <div className='main-screen'>
      <NavBar></NavBar>
      <div className='screen-body'>
        <div className='project-container'>
          <ProjectComponent
            name='Veganizza'
            skills='React | Redux | MongoDB | Express.js | Node.js'
            image='/images/veganizza-thumb.jpg'
            demo='https://veganizza.herokuapp.com'
            github='https://github.com/anthonyoliai/Veganizza'
            description='A full-stack project I made for fun, fully functional and built from scratch. Functionalities include
            registering, logging in, adding items to the cart, payment, and API fetch for delivery status on order screen.
            Fully function MongoDB database, and protection middleware using express.js. 
            Site is not a live product! Payment system can be tested by using sandbox paypal account.'
          ></ProjectComponent>
          <ProjectComponent
            name='ARJS2'
            skills='Node.js | WebRTC | WebSockets'
            image='/images/arjs2-thumb.jpg'
            github='https://github.com/anthonyoliai/Veganizza'
            description='While studying at the Vrije Universiteit I wrote a thesis about offloading object recognition from mobile augmented reality applications. 
            The goal was to make mobile AR applications more scalable, by running the heavy task of object recognition on a separate server. 
            With the AR.JS library, Node.JS and WebRTC, I was able to create a peer-to-peer client to server architecture. 
            By running multiple tests on multiple systems, and analyzing metrics such as CPU/GPU/MEM usage, a conclusion could be drawn whether offloading was effective.'
          ></ProjectComponent>
          <ProjectComponent
            name='Portfolio v1'
            skills='HTML | CSS | JS | React'
            image='/images/portfolio-thumb.jpg'
            github='https://github.com/anthonyoliai/Veganizza'
            description='The first version of a simple portfolio I have made in my free time using mostly React. '
          ></ProjectComponent>
        </div>
      </div>
    </div>
  )
}

export default ProjectScreen