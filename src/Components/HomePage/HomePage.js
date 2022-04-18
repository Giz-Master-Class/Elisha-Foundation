import React from 'react'
import styled from 'styled-components'


export const HomePage = () => {
  return (
    <HomeContainer>
        <HomeWrapper></HomeWrapper>
    </HomeContainer>
  )
}

const HomeContainer=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

const HomeWrapper=styled.div`
    background-color:orange;
    width:90%;
    height:90%;
`