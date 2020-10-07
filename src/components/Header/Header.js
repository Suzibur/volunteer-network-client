import React, { useContext } from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../logos/Group 1329.png'
import './Header.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loginUser] = useContext(UserContext);
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Brand href="/">
                    <Image className="logo" src={Logo}></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="menu" to="/home">Home</Link>
                        <Link className="menu" to="#link">Donation</Link>
                        <Link className="menu" to="#link">Events</Link>
                        <Link className="menu" to="#link">Blog</Link>
                    </Nav>
                    {loginUser.loggedIn ?
                        <Button className="button" variant="primary">
                            <a className="button-text" href="/">Logout</a>
                        </Button>
                        :
                        <Button className="button" variant="primary">
                            <Link className="button-text" to='/login'>Login</Link>
                        </Button>
                    }
                    {loginUser.loggedIn ?
                        <Button className="button" variant="secondary">
                            <Link className="button-text" to='/userDashboard'>{loginUser.userName}</Link>
                        </Button>
                        :
                        <Button className="button" variant="secondary">
                            <Link className="button-text" to='#'>Admin</Link>
                        </Button>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;