import React from 'react'
import styled from 'styled-components'


export const ContactPage = () => {
  return (
    <ContactContainer>
        <ContactWrapper></ContactWrapper>
    </ContactContainer>
  )
}

const ContactContainer=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

const ContactWrapper=styled.div`
    background-color:red;
    width:90%;
    height:90%;
`