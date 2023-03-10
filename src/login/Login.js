import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card}  from 'react-bootstrap';
// import './Login.css';
import LoginButton from './LoginButton';



function Login () {
    return (
        <Card style = {{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>Log In</Card.Title>
                <Card.Text>
                    Click Below to Log In
                </Card.Text>
                <LoginButton/>
            </Card.Body>
        </Card>

    )
}


export default Login;