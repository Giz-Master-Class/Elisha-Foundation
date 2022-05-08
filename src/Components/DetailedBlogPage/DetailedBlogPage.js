import React from 'react'
import styled from 'styled-components'


export const DetailedBlogPage = () => {
  return (
    <DetailedBlogContainer>
        <DetailedBlogWrapper></DetailedBlogWrapper>
    </DetailedBlogContainer>
  )
}

const DetailedBlogContainer=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

const DetailedBlogWrapper=styled.div`
    background-color:grey;
    width:90%;
    height:90%;
`