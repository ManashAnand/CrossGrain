import React, { useState } from 'react'
import './ConsumerLogin.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import GoogleButton from 'react-google-button';
import { auth } from '../../../Firebase/firebase';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const ConsumerLogin = () => {
  const navigate = useNavigate();
    const provider = new GoogleAuthProvider(auth);
  const [Login,setLogin] = useState(true);

  const [ConsumerUser,setConsumerUser] = useState("");
  const [ConsumerEmail,setConsumerEmail] = useState("");
  const [ConsumerPass,setConsumerPass] = useState("");

  const [ConsumerLoginEmail,setConsumerLoginEmail] = useState("");
  const [ConsumerLoginPass,setConsumerLoginPass] = useState("");
  
  const handleGoogle = async (e) => {
    try {
      const farmerGoogle =  await signInWithPopup(auth,provider);
      console.log(farmerGoogle);
      navigate("/consumer");
        
    } catch (error) {
        console.log(error.message);
    }
    
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(Login){
        try {
            const LoginUsers = await signInWithEmailAndPassword(auth,ConsumerLoginEmail,ConsumerLoginPass);
            const LoginUser = LoginUsers.user;
            console.log(LoginUser);
            navigate("/consumer");
        } catch (error) {
            console.log(error.message);
        }
        setConsumerEmail("");
        setConsumerLoginPass("");
    }
    else{
        try {
            const SignUsers = await createUserWithEmailAndPassword(auth,ConsumerEmail,ConsumerPass);
                const SignUser =  SignUsers.user;
                console.log(SignUser);
                navigate("/consumer");
                
        } catch (error) {
            console.log(error.message);
        }
        setConsumerUser("");
        setConsumerEmail("");
        setConsumerPass("");
    }
  }

  return (
    <>
     <div className="consumerLogin">
      <div className="consumerTag">  {Login? "Login":"SingUp"} for Consumer </div>
                  
                  {/* Email and password box */}
               {Login &&  <Box className="consumerBox"
                      component="form"
                      sx={{
                          '& > :not(style)': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off" >

                  <TextField id="outlined-basic" label="Email" variant="outlined" className="inputBox"
                   onChange={
                        // (e)=> console.log(e.target.value) 
                        (e) =>  setConsumerLoginEmail(e.target.value)
                        }
                 />
                  <TextField id="outlined-basic" type="password" label="Password"  variant="outlined" className="inputBox"  
                    onChange={
                        (e)=> setConsumerLoginPass(e.target.value)
                        // (e) => console.log(e.target.value)
                        }
                  />

                  </Box>}


                   {!Login &&  <Box className="consumerBox"
                      component="form"
                      sx={{
                          '& > :not(style)': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off" >

                  <TextField id="outlined-basic" label="Username"  variant="outlined" className="inputBox"
                    // onChange={(e) => console.log(e.target.value)}
                    onChange={(e) => {setConsumerUser(e.target.value)}}
                  />
                  <TextField id="outlined-basic" label="Email" variant="outlined"  className="inputBox"
                    onChange={(e) => setConsumerEmail(e.target.value)}
                  />
                  <TextField id="outlined-basic" type="password" label="Password" variant="outlined" className="inputBox"
                   onChange={(e) => {setConsumerPass(e.target.value)}}
                  />

                  </Box>}

                  {/* acknowledge checkbox */}
                  <FormGroup>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="I have acknowledge all terms and conditions" />
                  </FormGroup>

                      {/* email button */}
                  <Stack direction="row" spacing={2}>
                      <Button variant="contained" color="success" onClick={handleSubmit}> 
                          {Login? "Login":"SingUp"}
                      </Button>
                  </Stack>
                    <p>Doesn't have an account? 
                    <span className="spanChange" onClick={()=>
                  {  
                    setLogin(!Login);

                    }
                    }>
                     Click here 
                     </span> </p>
                    
                  <div>OR</div>

                  {/* Google button */}
                  <GoogleButton
                      type="dark" // can be light or dark
                      onClick={() => handleGoogle }
                      />
      </div> 
    </>
  )
}

export default ConsumerLogin
