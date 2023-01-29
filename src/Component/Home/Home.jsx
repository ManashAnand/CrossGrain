import React from 'react';
import ConsumerLogin from './Consumer/ConsumerLogin';
import FarmerLogin from './Farmer/FarmerLogin';
import  './Home.css';

const Home = () => {
  return (
    <>
      <div className="navBar">
      <p>CrossGrains</p>  
      </div>
        <div className="mainBox">
            <div className="firstBox">
                <FarmerLogin/>
            </div>
            <div className="secondBox">
                <ConsumerLogin/>
            </div>
        </div>
    </>
  )
}

export default Home
