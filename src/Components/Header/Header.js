import React, {useState} from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom'
export const Header = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }
  return (
    <Container>
        <ContainerWrapper>
            <LogoWrap>
                <Logo>Logo Image</Logo>
            </LogoWrap>
            <Navs onClick={handleClick} click={click}>
                <Link to ='/' style ={linkStyle}> <NavLinks>Home</NavLinks> </Link>
                <Link to ='/about' style ={linkStyle}> <NavLinks>About</NavLinks> </Link>
                <Link to ='/contact' style ={linkStyle}> <NavLinks>Contact</NavLinks> </Link>
                <Link to ='/blog' style ={linkStyle}> <NavLinks>Blog</NavLinks> </Link>
                <Link to ='/donate' style ={linkStyle}> <Button>Donate</Button> </Link>
            </Navs>
            {/* <Button>
                Try for free
            </Button> */}
            <MobileIcon onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </MobileIcon>
        </ContainerWrapper>
    </Container>
  )
}

const Container = styled.div`
   width: 100%;
   height: 80px;
   background-color: white;
   color: #16195E;
   display: flex;
   justify-content: center;
`


const ContainerWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

`
const Logo = styled.div`
  font-size: 35px;
`
const Logo1 = styled.div`
  font-size: 35px;
  font-weight: bold;
`
const LogoWrap = styled.div`
   display: flex;
`
const MobileIcon = styled.div`
  font-size: 25px;
 display: none;
  @media screen and (max-width: 768px){
    display: block;
  }
  
`

const Navs = styled.ul`
  width: 500px;
  height:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  text-decoration:none;
@media screen and (max-width: 768px){
  flex-direction: column;
  position: absolute;
  background-color: white;
  opacity: 0.8;
  height:100%;
  width: 50%;
  top:63px;
  left: ${({click}) => (click ? 0 : '-100%' )};
  transition: all 0.8s ease-in-out;
}
`

const NavLinks = styled.li`
   list-style: none;
   text-decoration:none;
`

const Button = styled.div`
  background-color: green;
  width: 100px;
  height: 30px;
  color: white;
  padding: 10px 0 0 0;
  border-radius:5px;
  text-align: center;
  @media screen and (max-width:769px){
    background-color: white;
    color:black;
  }
`

const linkStyle = {
  textDecoration :"none",
  color:'black'
};