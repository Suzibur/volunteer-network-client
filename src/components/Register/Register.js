import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Register.css'

const Register = () => {
    const [loginUser] = useContext(UserContext);
    const { activity } = useParams();

    const history = useHistory();
    const handleSubmit = () => {
        const userName = document.getElementById('userName').value
        const userEmail = document.getElementById('userEmail').value
        const date = document.getElementById('date').value
        const description = document.getElementById('description').value
        const activity = document.getElementById('activity').value
        const submittedData = {
            userName: userName,
            userEmail: userEmail,
            date: date,
            description: description,
            activity: activity
        }
        fetch('https://enigmatic-badlands-78324.herokuapp.com/addActivity', {
            method:'POST',
            headers: {"Content-type":"Application/json"},
            body:JSON.stringify(submittedData)
        })
        .then(result => {
            if(result){
                history.push('/userDashboard')
            }
        })
    }
    return (
        <Container>
            <Header></Header>
            <Row className="d-flex justify-content-center">
                <Col className="register-box" xs={9} sm={8} md={4}>
                    <h3>Register as a Volunteer</h3>
                    <Form>
                        <FormControl className="input"
                            id="userName"
                            name="userName"
                            defaultValue={loginUser.userName}
                            placeholder="Full name"
                        />
                        <FormControl className="input"
                            id="userEmail"
                            name="userEmail"
                            defaultValue={loginUser.email}
                            placeholder="Username or Email"
                        />
                        <FormControl className="input"
                            id="date"
                            name="date"
                            type="date"
                        />
                        <FormControl className="input"
                            id="description"
                            name="description"
                            placeholder="Description"
                        />
                        <FormControl className="input"
                            id="activity"
                            name="activity"
                            defaultValue={activity}
                            placeholder="Your Activity"
                        />
                        <Link className="button-text">
                            <Button onClick={handleSubmit} variant="primary" size="lg" block>Registration</Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;