import React from 'react'
import Resume from './Resume';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap';
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
                  <Button variant="secondary" className="my-5" size="lg">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 position-relative">
        <div className="row">
          <div className="col-12 mb-4 text-center social">
            <a href="https://github.com/49ahmadhassan" target='_blank'>
              <GitHubIcon/>
            </a>
            <a href="https://wa.me/qr/7HIQVMGLAHUTK1" target='_blank'>
              <WhatsAppIcon/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100085081321536&mibextid=ZbWKwL" target='_blank'>
              <FacebookOutlinedIcon />
            </a>
            <a href="https://www.linkedin.com/in/ahmad-hassan-231167252/" target='_blank'>
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/invites/contact/?i=11ciqnrmd99cq&utm_content=pix4j00" target='_blank'>
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/@ahmadfreetime/about" target='_blank'>
              <YouTubeIcon/>
            </a>
          </div>
        </div>
        <hr />
        <div className="container">
          <a href="#top">
            <div className='row justify-content-end'>
              <div className='col-1 arrow'>
                <ArrowUpwardIcon />
              </div>
            </div>
          </a>
          <div className='row'>
            <div className='col-md-12 copyright'>
              <p>Copyright @ 2022 All right Ahmad Hassan</p>
              <p>Design By Ahmad Hassan</p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
export default Footer