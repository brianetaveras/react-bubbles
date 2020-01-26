import React, {useState} from "react";
import styled from 'styled-components';
import axios from 'axios';

const LoginCard = styled.div`

  max-width: 400px;
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.2);
  margin: 0 auto;
  padding: 20px;

`

const Input = styled.input`
  width: 90%;
  height: 50px;
  margin: 10px 0;
  padding: 0 5px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  
  `
  
  const LoginButton = styled.button`
    width: 90%;
    height: 50px;
    margin: 10px 0;
    padding: 0 5px;



`

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [info, setInfo] = useState({});

  const handleChange = e =>{
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', info)
    .then(res=>{
      console.log(res)
      localStorage.setItem('token', res.data.payload);
    })
  }

  return (
    <>
    <LoginCard>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    <form onSubmit={handleSubmit}>
    <Input onChange={handleChange} type="text" name="username" placeholder="Username"/>
    <Input onChange={handleChange} type="text" name="password" placeholder="Password"/>
    <LoginButton>Log In</LoginButton>

    </form>
    </LoginCard>
    </>
  );
};

export default Login;
