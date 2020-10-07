import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Image, Row } from 'react-bootstrap';
import Logo from '../../logos/Group 1329.png'
import Google from '../../logos/google.png'
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase";
import { firebaseConfig } from '../../firebaseConfig/firebaseConfig';
import { UserContext } from '../../App';

const Login = () => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const newUserInfo = {
                userName: result.user.displayName,
                email: result.user.email,
                loggedIn: true
            }
            setLoginUser(newUserInfo)
            history.replace(from);
            storeAuthToken();
            // ...
        }).catch(function (error) {
        });
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
            sessionStorage.setItem('token', idToken)
            // Send token to your backend via HTTPS
            // ...
        }).catch(function (error) {
            // Handle error
        });
    }
    return (
        <Col>
            <Image className="_logo" src={Logo}></Image>
            <Row className="d-flex justify-content-center">
                <Col className="login-box" xs={10} sm={8} md={6} lg={5}>
                    <h2>Login With</h2>
                    <Col className="login-button" onClick={handleGoogleSignin}>
                        <Image className="google-icon" src={Google}></Image>
                        <p>Continue with Google</p>
                    </Col>
                    <small>Don't have a account?<Link>Create Acoount</Link></small>
                </Col>
            </Row>
        </Col>
    );
};

export default Login;