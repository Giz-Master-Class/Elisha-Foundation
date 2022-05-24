import React from 'react'
import styled from 'styled-components'
import {Hero} from '../BlogPage/Hero'
import CardHolder from '../BlogPage/CardHolder'
import {CardHolder2} from '../BlogPage/CardHolder2'

export const BlogPage = () => {
  return (
    <BlogContainer>
        <BlogWrapper>
          <Hero/>
          <CardHolder/>
          <CardHolder2/>
        </BlogWrapper>
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
    width:100%;
    height:90%;
`