import React from 'react'
import styled from 'styled-components'


export const AboutPage = () => {
  return (
    <AboutContainer>
        <AboutWrapper></AboutWrapper>
    </AboutContainer>
  )
}

const AboutContainer=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

const AboutWrapper=styled.div`
    background-color:blue;
    width:90%;
    height:90%;
`