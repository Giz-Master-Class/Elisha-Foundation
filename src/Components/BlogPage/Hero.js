import React from 'react'
import Mother from '../Images/mother.png'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Hero = () => {
  return (
    <HeroContainer>
    <HeroContain>
      <MainHeroContain>
          {/* <Container> */}
            <HeroWrap>
              <Blog>BLOG POST</Blog>
               <Para>
                 <Para1>We are excited about the lives we are touching,</Para1>
                 <Para2>catch up on our events</Para2>
              </Para>
              <Link to = '/donate' style ={linkStyle} ><Button>Donate</Button></Link>
            </HeroWrap>
        {/* </Container> */}
      </MainHeroContain>
    </HeroContain>
  </HeroContainer>
)
}

const HeroContainer = styled.div`
   width: 100%;
   height: 671px;
   background-image: url(${Mother});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   position: relative;
   color: #ffffff;
   /* z-index: 1; */
`
const HeroContain = styled.div`

  position: absolute;
  /* content:''; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 51, 153, 0.4);
  color: white;
 
`
const MainHeroContain = styled.div`
  /* position: relative;
  z-index: 2; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
  @media screen and (max-width: 425px){
       margin-left: 60px;
     }
`

const Container = styled.div`

`


const HeroWrap = styled.div`
     /* width: 100%; */
    
`

const Blog = styled.h1`
  font-size: 50px;
  color: white;
  margin-left: -50px;
`
const Para = styled.div`
  line-height: 5px;
  margin-bottom: 20px;

`


const Para1 = styled.p`
  font-size: 16px;
  margin-left: -65px;
  @media screen and (max-width: 320px){
       font-size: 14px;
     }
`


const Para2 = styled.p`
  font-size: 16px;
  @media screen and (max-width: 320px){
       font-size: 14px;
     }
`

const Button = styled.div`
    background: #3AB54A;
   width: 171px;
   height: 48px;
   text-align: center;
   border-radius: 8px;
   color: white;
   font-weight: bold;
   padding: 15px 0 0 0;
`

const linkStyle = {
  textDecoration :"none",
  
  
}
