import { ref, set,  } from 'firebase/database'
import React, { useState } from 'react'
import {database} from '../../Firebase/firebase';
import styles from "./Farmer.module.css";
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import {db} from '../../Firebase/firebase'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const MainPage = () => {
  const [alignment, setAlignment] = React.useState('rice');
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
    const [productName,setProductName] = useState("");
    const [desc,setDesc] = useState("");
    const [rate,setRate] = useState(0);
    const [quantity,setQuantity] = useState(0);
  
  

  
    const [userData,setUserData] = useState({
      labels: ["rice","wheat","banana","mango","grapes"],
      datasets: [{
        label: "Current price growth",
        data: [Math.floor(Math.random() * 100) + 1,
          Math.floor(Math.random() * 100) + 1,
          Math.floor(Math.random() * 100) + 1,
          Math.floor(Math.random() * 100) + 1,
          Math.floor(Math.random() * 100) + 1]
      }]
    });

    
   
    const userCollectionRef = collection(db, "farmer");
  


  const handleSubmit =  async () => {
    // const file = e.target[4].files[0];
    try {
    
      await  addDoc(userCollectionRef,{
          name: productName,
          discription:desc,
          price:rate,
          quantity,
          value:alignment
        }
        )
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
   

      <div className={styles.mainBox}>
          

              <div className={styles.firstBox}>
                <div  className={styles.pieDesign}>
                  <Doughnut data={userData}/>
                </div>
               </div>
            <div className={styles.secondBox}>
                    
                    <div className={styles.farmerPortion}>
                      <div className={styles.same}>
                        <h2>List Your Products</h2>
                      </div>
                    <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '97%' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField id="outlined-basic" label="Product Name" variant="outlined" onChange={
                      (e) => {setProductName(e.target.value)}
                    } />
                  </Box>

                    <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '97%' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField id="outlined-basic" label="Description" variant="outlined" 
                      onChange={(e) => setDesc(e.target.value)}

                    />
                  </Box>


                      <div className={styles.qunatityRate}>
                      <Box
                        component="form"
                        sx={{
                          '& > :not(style)': { m: 1, width: '80%',marginLeft:"2rem" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField id="outlined-basic" label="Rate" variant="outlined" 
                          onChange={(e) => {setRate(e.target.value)}}
                        />
                      </Box>

                      <Box
                        component="form"
                        sx={{
                          '& > :not(style)': { m: 1, width: '80%' },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField id="outlined-basic" label="Quantity" variant="outlined"
                        onChange={(e) => setQuantity(e.target.value) } />
                      </Box>

                    
                      </div>

                      <div className={styles.same}>
                        <p style={{fontSize:"25px"}}>Upload image for your product</p>
                      </div>
                      <div className={styles.same}>
                       <div className={styles.filePlace}>
                        <input type="file"  className='inp'
                        
                        />

                       </div>
                       </div>
                       <div className={styles.same} style={{marginTop:"2rem"}}>

                       <ToggleButtonGroup
                      color="primary"
                      value={alignment}
                      exclusive
                      onChange={handleChange}
                      aria-label="Platform"
                    >
                      <ToggleButton value="Rice">Rice</ToggleButton>
                      <ToggleButton value="Wheat">Wheat</ToggleButton>
                      <ToggleButton value="PULSE">PULSE</ToggleButton>
                      <ToggleButton value="VEGETABLES">VEGETABLES</ToggleButton>
                    </ToggleButtonGroup>
                       </div>

                       <div className={styles.same}>
                       <Stack spacing={2} direction="row" style={{marginTop:"2rem"}}>
                        {/* <Button variant="text">Text</Button>   */}
                        
                        <Button variant="contained" onClick={handleSubmit} >List Product</Button>
                        {/* <Button variant="outlined">Outlined</Button> */}
                      </Stack>
                      </div>


                    </div>
            
                </div>
      </div>
 
  );
}

export default MainPage;
