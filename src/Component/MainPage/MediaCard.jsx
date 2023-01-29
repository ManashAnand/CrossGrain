import react, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IndProd from './IndProd'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './MediaCard.css'
import { useNavigate } from 'react-router-dom';


import whe from '../../asset/whe';
import rice from '../../asset/rice';


const MediaCard = (props) => {
  const [fav,setFav] = useState();
  const [open,setOpen] = useState(false);
  const navigate = useNavigate();

 
  const handleClose = () => {
    setOpen(false);
  }

  const handleOrder = () => { 
      navigate("./order");
  }

  const handleClick =  (name,price) => {
       setOpen(!open);
      // console.log(name+" "+price);  
     
  }
  const counter = 0;
  return (
    <>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.src==="whe"?whe:props.src}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <div style={{display:"flex",border:"2px solid black",width:"100%",justifyContent:"center",cursor:"pointer"}}>
            <Button size="small" onClick={() => handleClick(props.name,props.price)}>Add to cart</Button>
        </div>
      </CardActions>
    </Card> 
    
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <div className="openBox" >
        <div className="billingLine">
          Billing
        </div>
        <div className="prodName">
         Product name:  {props.name}
        </div>
        <div className="prodDesc">
          Product description: {props.description}
        </div>
        <div className="prodPrice">
          Product price:  {props.price}
        </div>
        <div className="btnBox">
        <button className='btn' onClick={handleOrder}>
          Product preview
        </button>
        </div>
       
      
        {/* <h1>{props.name}</h1>
        <h2>{props.price}</h2> */}
      </div>
    </Backdrop>
    </>
  )
}

export default MediaCard
