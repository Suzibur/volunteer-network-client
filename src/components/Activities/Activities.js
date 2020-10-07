import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData from '../../fakeData/fakeData'
import Activity from '../Activity/Activity';
import Header from '../Header/Header'
import './Activities.css'
const Activities = () => {
    return (
        <Container>
            <Header></Header>
            <h2>i grow by helping people in their need.</h2>
            <Row className="d-flex justify-content-center">
                <Col md={4}>
                    <InputGroup>
                        <FormControl
                            placeholder="Search...."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="primary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                {
                    fakeData.map(data => <Activity data={data}></Activity>)
                }
            </Row>
        </Container>
    );
};

export default Activities;