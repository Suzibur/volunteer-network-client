import React, { useEffect } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import Img from '../../images/extraVolunteer.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserAcivity.css'

const UserActivity = (props) => {
    const {activity, date, _id} = props.data;
    const handleSubmit = () => {
        fetch(`https://enigmatic-badlands-78324.herokuapp.com/deleteUserActivity/${_id}`, {
            method:'DELETE',
            headers:{'Content-type':'Application/json'}
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                document.getElementById(_id).style.display = 'none'
            }
        })
    }
    return (
        <Col id={_id} className="activity-box" md={5}>
            <Row>
                <Col md={5}>
                    <Image style={{ width: '100%' }} src={Img}></Image>
                </Col>
                <Col md={6}>
                    <h5>{activity}</h5>
                    <p>{date}</p>
                    <Button onClick={handleSubmit} variant="primary">Cancel</Button>
                </Col>
            </Row>
        </Col>
    );
};

export default UserActivity;