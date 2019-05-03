import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PageDiv = styled.div `
    margin: 0 auto;
    display: flex;
`
const WrappedDiv = styled.div`
    margin:10rem 32rem 5rem;
    padding: 0 2rem 8rem 3rem;
    background: white;
    border: 1px solid #b3b3b3

    img{
        padding-top:1.5rem;
        max-width:12rem;
    }

    input{
        margin-bottom:0.5rem;
        padding: 0.5rem 3rem;
        background: #F8F8F8;
        border: 1px solid #e6e6e6;
        border-radius:0.2rem;
        
    }
    `;

    const Button = styled.button`
    font-size: 1.2em;
    margin: 1em;
    padding: 0.25em 2em;
    border: 2px solid #4d94ff;
    background: #4d94ff;
    border-radius: 3px;
    color:white;
    cursor: pointer;
    `;

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
        }
    }


    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    logIn = event => {
        event.preventDefault();
        const user= this.state.username
        localStorage.setItem('username', user)
        window.location.reload();
    }

    render(){
        return (
                <PageDiv>
                <WrappedDiv>
                    <h1>Log In For The Latest News From Lambda Times.</h1>
                    <Button>Log in with Facebook</Button>{''}
                    <p>Or</p>
                    <form >
                        <input placeholder="username" value={this.state.username} type='text' name='username' onChange={this.handleInput} ></input>
                        <input placeholder="password" value={this.state.password} type='text' name='password' onChange={this.handleInput}></input>
                        <Button onClick={this.logIn}>Login</Button>{''}
                    </form>
                    <form>Don't have an account? <span>Sign up</span> </form>
                </WrappedDiv>
                </PageDiv>
        )
    }
}

Login.propTypes ={
     username: PropTypes.string,
     password: PropTypes.string,  
}
export default Login;