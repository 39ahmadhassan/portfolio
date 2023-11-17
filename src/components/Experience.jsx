import React from 'react'
function Experience(props) {
  return (
    <>
      <div className='row work-experience'>
        <div className='col-3' >
          <h2>{props.date}</h2>
        </div>
        <div className='col-2'>
          <img src={props.image} alt="not-avilable" />
        </div>
        <div className='col-5'>
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className='col-2'>
          <a href={props.siteLink} rel="noreferrer" target='_blank'>Visit Website</a>
        </div>
      </div>
    </>
  )
}

export default Experience