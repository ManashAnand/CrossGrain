import React, { useEffect } from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { getDownloadURL, listAll,  uploadBytes } from 'firebase/storage';
// import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import styles from "./Consumer.module.css";
import kisan from "../../asset/kisan.jpg";
import MediaCard from "./MediaCard";

import Footer from "./Footer";
import {db, storage} from '../../Firebase/firebase'

import {  collection,  getDocs,  } from "firebase/firestore";
import { ref } from "firebase/storage";
import pot from '../../asset/pot.jpeg';
import tom from '../../asset/tom.jpeg';
import cap from '../../asset/cap.jpeg';
import man from '../../asset/man.jpeg';
import bro from '../../asset/bro.jpeg';
import app from '../../asset/app.jpeg';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from '../../Firebase/firebase'


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));



const Consumer = () => {
  const navigate = useNavigate();
    const handleSignOut = async ( ) => {
      await signOut(auth);
      navigate("/");
    }

  const [searchTerm,setSearchTerm] = useState([]);
  const userCollectionRef = collection(db, "farmer");
  const [products, setProducts] = useState([
    
  ]);
  useEffect(() => {
    setSearchTerm(products.map((item) => [...item.name]))
  },[])

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      // console.log(data);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const imageListRef = ref(storage,"images/");
  useEffect(() => {
      const getData = async () => {
          const res = await listAll(imageListRef);
          console.log(res.items);
          res.items.forEach(async (item) => {
              const url = await getDownloadURL(item);
              products((prev) => [...prev,url]);
          })
      }
      getData();


  },[])

  const handleChange = (e) => {
  setSearchTerm(e.target.value);
  }
  const search = [];
  useEffect(() => {
    search.push(products.map((item) => {
       return item.name
    }))
  },[products])

  return (
    <>
      <div className={styles.fullScreen}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                CrossGrain
              </Typography>

              <Search onChange={handleChange}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Button
                variant="contained"
                size="medium"
                className={styles.LogoutBtn}
                style={{
                  marginLeft: "2rem",
                }}
                onClick={handleSignOut}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>

          <img src={kisan} style={{ width: "100%" }} />
        </Box>
        <div className={styles.headingConsumer}>Latest Product</div>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {
      
              products
             .map((item) => {
              return (
                <>
                <MediaCard
                  key={item.discription}
                  name={item.name}
                  description={item.discription}
                  src={item.value}
                  price={item.price}
                />
                </>
              );
            
            })}
          
          </div>
        </div>
        <div className={styles.fedded}>  Products </div>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {
      
            
                <>
                  
                <MediaCard
                  name="Potato"
                  description="Freshly picked "
                 src={pot}
                  price={2}
                />
                <MediaCard
                  name="tomato"
                  description="Freshly picked "
                 src={tom}
                  price={3}
                />
                <MediaCard
                  name="Capsicum"
                  description="Freshly picked "
                 src={cap}
                  price={4}
                />
                <MediaCard
                  name="Apple"
                  description="Freshly picked "
                 src={app}
                  price={8}
                />
                <MediaCard
                  name="Mango"
                  description="Freshly picked "
                 src={man}
                  price={12}
                />
                
                </>
              
            
            
            }
          
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Consumer;
