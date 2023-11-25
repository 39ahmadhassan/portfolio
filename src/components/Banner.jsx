import React from 'react'
import banner_img from './assets/images/banner-img.png'
import GetAppIcon from '@mui/icons-material/GetApp';
const Banner = () => {
  return (
    <>
    <div className="container">
        <div className="row mt-5">
            <div className="col-md-5">
                <div className='banner_text'>
                    <h1>hello! i'm ahmad hassan</h1>
                    <h5>software engineer and web developer</h5>
                    <button className='btn-one'>get resume <GetAppIcon/></button>
                </div>
            </div>
            <div className="col-md-7">
                <div className='banner_wrap'>
                    <img src={banner_img} alt="not-available" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner