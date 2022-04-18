import React from 'react'
import styled from 'styled-components'


export const DonatePage = () => {
  return (
    <DonateContainer>
        <DonateWrapper></DonateWrapper>
    </DonateContainer>
  )
}

const DonateContainer=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

const DonateWrapper=styled.div`
    background-color:green;
    width:90%;
    height:90%;
`