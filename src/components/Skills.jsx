import React from 'react'

function Skills(props) {
  return (
    <>
    <div className='col-4 skill'>
        <p>{props.experience}%</p>
        <span>{props.skillName}</span>
    </div>
    </>
  )
}

export default Skills