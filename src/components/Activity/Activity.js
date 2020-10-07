import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col } from 'react-bootstrap';
import './Activity.css'
import { Link } from 'react-router-dom';

const Activity = (props) => {
    const color = ['primary', 'danger', 'warning', 'secondary', 'success', 'info', 'dark']
    const index = Math.floor(Math.random()*6);
    const bgColor = color[index];
    const { name, img } = props.data;
    return (
        <Col xs={6} sm={6} md={4} lg={3}>
            <Card className="card">
                <Card.Img variant="top" src={img} />
                <Card className="card-footer" bg={bgColor}>
                    <Link className="link" to={`/register/${name}`}>{name}</Link>
                </Card>
            </Card>
        </Col>
    );
};

export default Activity;