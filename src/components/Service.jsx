import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
function Ser(props) {
    return (
        <>
            <div className='col-md-3 ser-data'>
                {/* <CodeIcon className='svg'/> */}
                <IntegrationInstructionsIcon className='svg' />
                {/* <ApiIcon className='svg'/> */}
                <h2>
                    {props.heading}
                </h2>
                <div>
                    <FiberManualRecordIcon />
                    <FiberManualRecordIcon />
                    <FiberManualRecordIcon />
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
                    <div className="col-md-4">
                    <Ser heading='Frontend Developer' />
                    </div>
                    <div className="col-md-4">
                    <Ser heading='React Developer' />
                    </div>
                    <div className="col-md-4">
                    <Ser heading='MERN Stack' />
                    </div>                   
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