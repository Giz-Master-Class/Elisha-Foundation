import React from 'react'
import styled from 'styled-components'


export const BlogPage = () => {
  return (
    <BlogContainer>
        <BlogWrapper></BlogWrapper>
    </BlogContainer>
  )
}

const BlogContainer=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

const BlogWrapper=styled.div`
    background-color:yellow;
    width:90%;
    height:90%;
`