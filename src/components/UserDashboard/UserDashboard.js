import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import UserActivity from '../UserActivity/UserActivity';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../App';

const UserDashboard = () => {
    const [loginUser] = useContext(UserContext);
    const [userActivity, setUserActivity] = useState([]);
    useEffect(() => {
        fetch(`https://enigmatic-badlands-78324.herokuapp.com/userActivity?email=${loginUser.email}`, {
            method:'GET',
            headers:{'Content-type':'Application/json',}
        })
        .then(res => res.json())
        .then(data => setUserActivity(data));
    }, [])
    return (
        <Container>
            <Header></Header>
            <Row className="d-flex justify-content-around">
                {
                    userActivity.map( data =>  <UserActivity data={data}></UserActivity>)
                }
            </Row>
        </Container>
    );
};

export default UserDashboard;