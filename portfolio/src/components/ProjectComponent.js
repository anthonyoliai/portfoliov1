import Fade from 'react-reveal/Fade'
import React from 'react'

const ProjectComponent = ({
  name,
  description,
  skills,
  image,
  demo,
  github,
}) => {
  return (
    <Fade up>
      <div className='single-project-container'>
        <img className='thumb-img' src={image}></img>
        <div className='single-project-text'>
          <h3>{name}</h3>
          <p>{description}</p>
          <span>{skills} </span>
          <div className='icon-container'>
            {github && (
              <a href={github}>
                <img
                  className='filter'
                  src='/images/icons/github-gray.svg'
                ></img>
              </a>
            )}
            {!github && (
              <a>
                <img src='/images/icons/github-red.svg'></img>
              </a>
            )}
            {demo && (
              <a href={demo}>
                <img className='filter' src='/images/icons/code.svg'></img>
              </a>
            )}
            {!demo && (
              <a>
                <img src='/images/icons/code-red.svg'></img>
              </a>
            )}
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default ProjectComponent
