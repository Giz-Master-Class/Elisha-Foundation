import React from 'react'
import styled from 'styled-components'
import {useEffect, useState} from 'react' 


export const SignIn = () => {
    const [form, setForm] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    const { firstName,lastName, email, country, password, confirmPassword } = form

    const handleChange =(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler =(e)=>{
        e.preventDefault()
        sessionStorage.setItem('userDetails', JSON.stringify({...form}))

        if(password !== confirmPassword){
                alert('password does not match')
            }
        else{
            window.location="/dashboard"
        }
    }
  return (
    <SignInContainer>
        <SignInWrapper>
            <form className='signInForm'onSubmit={submitHandler}>
                <input className="inputBox" type="text" name="firstName" placeholder="Enter Your First Name" onChange={handleChange} required/> <br/>
                <input className="inputBox" type="text" name="lastName" placeholder="Enter Your Last Name" onChange={handleChange} required/><br/>
                <input className="inputBox" type="email" name="email" placeholder="Enter Your E-mail" onChange={handleChange} required/><br/>
                <input className="inputBox" type="password" name="password" placeholder="Enter Your Password" onChange={handleChange} required/><br/>
                <input className="inputBox" type="password" name="confirmPassword" placeholder="Confirm Your Password" onChange={handleChange} required/><br/>
                <div className="termsOfService">
                    <input type="checkbox" id="readTerms" required/>
                    <p className="termsPara">I, have read, understood and i agree to the terms and conditions</p>
                </div>
                <button className="submitButton" type='submit'>Sign In</button>
            </form>
        </SignInWrapper>
    </SignInContainer>
  )
}

const SignInContainer=styled.div`
    width:100%;
    height:86vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

const SignInWrapper=styled.div`
    background-color:rgb(0,128,0);
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    .signInForm{
        width:300px;
        height:70vh;
        // background-color:rgb(0,128,0);
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border-radius: 30px;
        background: #007e00;
        box-shadow:  10px 10px 52px #003200,
                     -10px -10px 52px #00ca00;
    }
    .termsOfService{
        display:flex; 
        align-items:center;
        width:90%;
        justify-content:center;
    }
    .inputBox{
        border:none;
        height:30px;
        width:200px;
        border-radius: 6px;
        background: #007e00;
        box-shadow: inset 4px 4px 9px #003200, inset -4px -4px 9px #00ca00;
        &::placeholder{
            color:whitesmoke;
            font-weight:bolder;
        }
    }
    .submitButton{
        background-color:whitesmoke;
        color:rgb(0,126,0);
        border:none;
        width:100px;
        height:40px;
        border-radius:5px;
        font-weight:bolder;
        font-size:20px;
    }
    .termsPara{
        color:whitesmoke;
    }
`