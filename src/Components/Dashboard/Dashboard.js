import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from "react";
import {Routes, Route, Navigate, useLocation, Link} from "react-router-dom";
import { HomePage } from '../HomePage/HomePage';
import { AboutPage } from '../AboutPage/AboutPage';
import { ContactPage } from '../ContactPage/ContactPage';
import {BlogPage} from '../BlogPage/BlogPage'
import {DonatePage} from '../DonatePage/DonatePage'
import {linkStyle, DashboardContainer} from '../Dashboard/Dashboard.css'
import * as AiIcons from 'react-icons/ai';
import Logout from '../Images/logout.svg';

export const Dashboard = () => {

  const location = useLocation().pathname;
  const [path, setPath] = useState("");
  
  const openNav = () => {
      document.getElementById("sidebar").style.left = "0px";
  }
  
  const closeNav = () => {
      document.getElementById("sidebar").style.left = "-450px";
  }

  const changePathAndClose = (path) => {
      if(window.innerWidth<=992){
          closeNav()
      }
      setPath(path);
      
  }

  useEffect(()=>{
      setPath(location);
     
  }, [location])
 
  let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
  return (
    <DashboardContainer>
      <div className="sideBar" id="sidebar">
        <div className='sideBarTop'>
          <h1 className="welcomePara">welcome, {userDetails.firstName} </h1>
          <Link style={linkStyle} to="/dashboard">
            <div 
              className={path.includes("dashboard") || path==="dashboard"
                ?"dashboardWrapperactive" : "dashboardWrapper"}
              onClick={()=>changePathAndClose("dashboard") }
            >
              <AiIcons.AiFillHome/>
              <p className='homePara'> Home</p>
            </div>
          </Link>
          <Link style={linkStyle} to="/dashboard-about">
            <div 
              className={path.includes("dashboard-about") || path==="dashboard-about"
                ?"aboutWrapperactive" : "aboutWrapper"}
              onClick={()=>changePathAndClose("dashboard-about") }
            >
              <AiIcons.AiFillHome/>
              <p className='aboutPara'> About</p>
            </div>
          </Link>
          <Link style={linkStyle} to="/dashboard-contact">
            <div 
              className={path.includes("dashboard-contact") || path==="dashboard-contact"
                ?"contactWrapperactive" : "contactWrapper"}
              onClick={()=>changePathAndClose("dashboard-contact") }
            >
              <AiIcons.AiFillHome/>
              <p className='contactPara'> Contact</p>
            </div>
          </Link>

          <Link style={linkStyle} to="/dashboard-blog">
            <div 
              className={path.includes("dashboard-blog") || path==="dashboard-blog"
                ?"blogWrapperactive" : "blogWrapper"}
              onClick={()=>changePathAndClose("dashboard-blog") }
            >
              <AiIcons.AiFillHome/>
              <p className='contactPara'> Blog</p>
            </div>
          </Link>

          <Link style={linkStyle} to="/dashboard-donate">
            <div 
              className={path.includes("dashboard-donate") || path==="dashboard-donate"
                ?"donateWrapperactive" : "donateWrapper"}
              onClick={()=>changePathAndClose("dashboard-donate") }
            >
              <AiIcons.AiFillHome/>
              <p className='contactPara'> Donate</p>
            </div>
          </Link>
        </div>
        <Link to ='/signin' style={linkStyle}>
          <div className="logOutWrapper">
            <img src={Logout} alt="icon" />
            <p className='dashPara'>Logout</p>
          </div>
        </Link>
      </div>
      <div className="dashboardRoutes">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />}/>
          <Route path="/dashboard" element={<HomePage/>} />
          <Route path="/dashboard-about" element={<AboutPage />} />
          <Route path="/dashboard-contact" element={<ContactPage />} />
          <Route path="/dashboard-blog" element={<BlogPage/>} />
          <Route path="/dashboard-donate" element={<DonatePage/>} />
        </Routes>
      </div> 
    </DashboardContainer>
  )
}



