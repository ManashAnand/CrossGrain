import React from "react";
import "./About.css";
import anjali from '../asset/a.jpg'
import satyam from '../asset/s.jpg'
import manash from '../asset/m.jpg'
import prajwal from '../asset/p.jpg'
import Footer from './MainPage/Footer';

export default function About() {
  return (
    <>
      

      <div className="aboutPage">
        <div className="bg bg1"></div>
        <div className="conatiner1">
          <h2>About Us</h2>
          <div className="aboutUs">
            <div className="left_div">
                <h1>Who We Are?</h1>
                <h1>What We Do Best</h1>
            </div>

            <div className="right_div">
                <p>
                    We are believers of change! A change driven by technology and innovation. We help businesses and individuals in adapting as well as adopting digital transformation. Our aim is to change people’s lives and improve businesses with our progressive and innovative technology solutions.
                </p>
                <p>
                    
                    We start by listening to the issues, requirements, challenges and objectives. The process continues with an effort to understand the business, market sector and competitors to develop information which is combined with our technical knowledge, expertise and res in order to provide the best solution at the lowest cost.
                </p>
            </div>
          </div>
          <h2>Team Members</h2>
          <div className="About_team">
            <section id="team">
            <div class="pro-container">
              <div class="pro pro-1">
                <img src={manash} alt="" />
                <div class="des">
                  <span>Manash Anand</span>
                  <h5>Web Developer</h5>
                </div>
              </div>
              <div class="pro pro-2">
              <img src={prajwal} alt="" />
                <div class="des">
                  <span>Prajwal Gupta</span>
                  <h5>Web Developer</h5>
                </div>
              </div>
              <div class="pro pro-3">
                <img src={anjali} alt="" />
                <div class="des">
                  <span>Anjali Singh</span>
                  <h5>Web Developer</h5>
                </div>
              </div>
              <div class="pro pro-4">
                <img src={satyam} alt="" />
                <div class="des">
                  <span>Satyam Kumar</span>
                  <h5>Web Developer</h5>
                </div>
              </div>
            </div>
            </section>
          </div>
        </div>
            <Footer/>
      </div>
    </>
  );
}