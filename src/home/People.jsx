import React from 'react'
import Test from './Test';
function People() {
  return (
    <>
     <div className='container'>
        <div className='row people'>
            <div className='col-md-4'>
                <h1>Happy People</h1>
            </div>
        </div>
        <div className='row'>
            <Test/>
        </div>
     </div>
    </>
  )
}
export default People