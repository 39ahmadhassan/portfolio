import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import desktop_work from '../assets/image/desktop_work.jpg'
function display_card(){
  return(
    <>
    {
      Array.from({length: 40}, (_, index) =>(
        <div key={index} className="col-md-4 my-3">
        <Card className='cards' sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={desktop_work}
            alt="Paella dish"
          />
          <CardContent>
            <Typography className='mb-3' variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
              of frozen peas along with the mussels, if you like.
            </Typography>
            <a href="" target='_blank'>view site</a>
          </CardContent>
        </Card>
      </div>
      ))
    }
    </>
  )
}
function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        {display_card()}
      </div>
    </div>
  );
}

export default Portfolio;
