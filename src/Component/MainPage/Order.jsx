import {useState} from 'react'
import './Order.css'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TooltipMade from './TooltipMade'
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const [jitgye,setJitgye] = useState(false);
     const [value, onChange] = useState(new Date());
    const [value2, onChange2] = useState('10:00');
    const navigate = useNavigate();

        const handleDialog = () => {
        setJitgye(true);
        // navigate("./consumer");
        setInterval(() => {
            setJitgye(false)
        }, 4000);
            
        }
  return (
    <>
    <div className='mainContainer'>
    
        <div className="secondContainer">
    {  jitgye &&  <Stack sx={{ width: '100%' }} spacing={2}>
                  <Alert severity="success">Successfully Order placed!!!</Alert>
                </Stack>}
            Order Summary

            <TooltipMade/>
        <div className="addressHead">Delivery Details</div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
     
       
        <FormControl sx={{ m: 1, width: '133ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">Address</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          </FormControl>
          </Box>
          <div style={{width:"100%" , display:"flex",justifyContent:"center",marginBottom:"2rem",fontSize:"25px"}}>
          <div style={{marginTop:"2rem"}}>Choose Date and time</div>
          </div>

            <div className="timeDateBox">
                <div>
                <DatePicker onChange={onChange} value={value} />
                </div>
                <div>
                <TimePicker onChange={onChange2} value={value2} />
                </div>
            </div>
            <div className="btn2">

            <Stack direction="row" spacing={2}>
                <Button variant="contained" color="success" onClick={handleDialog}>
                    Proceed
                </Button>
            </Stack>
            </div>

        </div>
    </div>
    </>
  )
}

export default Order
