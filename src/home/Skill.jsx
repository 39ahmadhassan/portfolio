import React from 'react'

function Skill(props) {
  return (
    <>
    <div className='col-4 skill'>
        <p>{props.experience}%</p>
        <span>{props.skillName}</span>
    </div>
    </>
  )
}

export default Skill