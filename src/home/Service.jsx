import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SchemaIcon from '@mui/icons-material/Schema';
import Btn from './Btn'
function Ser (){
    return(
        <>
            <div className='col-md-3 ser-data'>
            <SchemaIcon className='svg' />
                <h2>Graphic Designer</h2>
              <div>
              <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
                <FiberManualRecordIcon/>
              </div>
            </div>
        </>
    )
}
function Service() {
  return (
    <>
        <div className='container services'>
            <div className='row'>
                <div className='col-md-4'>
                  <h1>My Services</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-10'>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. </p>
                </div>
            </div>
            <div className='row ser'>
                <Ser/><Ser/><Ser/>
            </div>
            {/* <div className='row mt-5'>
            <div className='col-md-3 d-flex justify-content-center'>
                <Btn text=" Showcase &rsaquo;"/>
                </div>
            </div> */}
        </div>
    </>
  )
}

export default Service;