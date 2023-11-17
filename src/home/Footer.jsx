import React from 'react'
import Resume from './Resume';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Form, Row, Col,Button,FloatingLabel } from 'react-bootstrap';
function Footer() {
  return (
    <>
        <div className='container'>
            <div className='row footer'>
                <div className='col-md-4 text-center'>
                    <h1>Contact Me</h1>
                    </div>
                    <div className='row'>
                        <div className='col-md-10'>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                        <Form>
      <Row className="my-5">
      <Form.Group className='bg-transparent' as={Col} controlId="formGridPassword">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group as={Col} className='bg-transparent' controlId="formGridEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>
      <Form.Group className="my-5" controlId="formGridAddress1">
        <Form.Control placeholder="Phone" />
      </Form.Group>
      <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Message"
          style={{ height: '200px' }}
        />
      </FloatingLabel>
      <div className="d-grid gap-2">
      <Button variant="secondary"  className="my-5"   size="lg">
        Submit
      </Button>
      </div>
    </Form>
                        </div>
                    </div>
</div>
</div>
<div className="container-fluid mt-5 position-relative">
                    <hr/>
                    <div className="container">
                    <div className='row justify-content-end'>
                        <div className='col-1 arrow'>
<ArrowUpwardIcon/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 copyright'>
                        <p>Copyright @ 2022 All right Ahmad Hassan</p>
                        <p>Design By Ahmad Hassan</p>
                        </div>
                    </div>
</div>
</div>

            {/* </div> */}

    </>
  )
}
export default Footer