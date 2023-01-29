import React,{useState} from 'react'
import './FarmerLogin.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import GoogleButton from 'react-google-button';
import { auth } from '../../../Firebase/firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const FarmerLogin = () => {
    const provider = new GoogleAuthProvider(auth);
    const navigate = useNavigate();

    const [Login,setLogin] = useState(true);
    const [FarmerLoginEmail,setFarmerLoginEmail] = useState("");
    const [FarmerLoginPass,setFarmerLoginPass] = useState("");

    const [signUpUsername,setSignUpUsername] = useState("");
    const [signUpEmail,setSignUpEmail] = useState("");
    const [signUpPass,setSignUpPass] = useState("");

    const handleGoogle = async (e) => {
        try {
          const farmerGoogle =  await signInWithPopup(auth,provider);
          console.log(farmerGoogle);
          navigate("/farmer");

        } catch (error) {
            console.log(error.message);
        }
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(e);
        if(Login){
            try {
             const LoginUsers = await signInWithEmailAndPassword(auth,FarmerLoginEmail,FarmerLoginPass);
             const LoginUser = LoginUsers.user;
             console.log(LoginUser);
            } catch (error) {
                console.log(error.message);    
            }
                setFarmerLoginEmail("");
                setFarmerLoginPass("");
            navigate("/farmer");
            }
        else{
            try {
                const SignUsers = await createUserWithEmailAndPassword(auth,signUpEmail,signUpPass);
                const SignUser =  SignUsers.user;
                console.log(SignUser);
                navigate("/farmer");
                
            } catch (error) {
                console.log(error.message);
            }
            setSignUpEmail("");
            setSignUpPass("");
            setSignUpUsername("");
        }
    }

  return (
    <>
        <div className="farmerLogin">
                <div className="farmerTag"> {Login? "Login":"SingUp"} for Farmer </div>
                 
                 {/* Email and password box */}
             { Login
              && 
                <Box className="farmerBox"
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off" >

                <TextField id="outlined-basic" label="Email" variant="outlined" value={FarmerLoginEmail} className="inputBox" onChange={
                    (e)=>{
                        setFarmerLoginEmail(e.target.value)
                        }
                    }/>
                <TextField id="outlined-basic" type="password" label="Password" value={FarmerLoginPass} variant="outlined" className="inputBox" onChange={
                    (e) => setFarmerLoginPass(e.target.value)
                } />

                </Box>
            }
             { !Login &&   <Box className="farmerBox"
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off" >

                <TextField id="outlined-basic" label="Username" value={signUpUsername} variant="outlined" className="inputBox" onChange={
                    (e) => {
                        setSignUpUsername(e.target.value);
                    }
                }/>
                <TextField id="outlined-basic" label="Email" variant="outlined" value={signUpEmail} className="inputBox" onChange={
                    (e) => {
                        setSignUpEmail(e.target.value);
                    }
                }/>
                <TextField id="outlined-basic" type="password" value={signUpPass} label="Password" variant="outlined" className="inputBox" onChange={
                    (e) => {
                        setSignUpPass(e.target.value);
                        }
                }/>

                </Box>
            }
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
                    <span className="spanChange" onClick={
                        ()=>setLogin(!Login)}>
                     Click here 
                     </span> </p>

                <div>OR</div>

                {/* Google button */}
                <GoogleButton
                    type="dark" // can be light or dark
                    onClick={handleGoogle}
                    />
        </div> 

    </>
  )
}

export default FarmerLogin
