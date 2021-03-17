import React from 'react'

const BasicTimeLine = () => {
  return (
    <div className='rb-container'>
      <ul className='rb'>
        <li className='rb-item' ng-repeat='itembx'>
          <div className='timestamp'>Aug. 2016 - Aug. 2020</div>
          <div className='item-title'>
            Computer Science Bachelor at{' '}
            <a href='https://www.vu.nl/en/'>Vrije Universiteit</a>
          </div>
        </li>

        <li className='rb-item' ng-repeat='itembx'>
          <div className='timestamp'>Oct. 2020 - Jan. 2020</div>
          <div className='item-title'>
            Full-stack contributor at{' '}
            <a href='https://tecommons.medium.com/'>
              Token Engineering Commons
            </a>
          </div>
        </li>
        <li className='rb-item' ng-repeat='itembx'>
          <div className='timestamp'>Oct. 2020 - Now</div>
          <div className='item-title'>
            Front-end contributor and moderator at{' '}
            <a href='https://1hive.org/'>1Hive</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default BasicTimeLine
