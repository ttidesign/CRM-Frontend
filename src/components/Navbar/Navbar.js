import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar({ userToken, handleSignOut }) {
	return (
		<>

<Navbar expand='lg'>
            <Navbar.Brand>Essential CRM</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <Link to='/'>Home</Link>
                    <Link to='/features'>Features</Link>
					<Link to='/contact'>Contact</Link>
					  {userToken ? <Link to='/api/clients' >Clients</Link> : ''}
              {userToken ? <Link to='/api/users'>Users</Link> : ''}
            {!userToken ? <Link to='/signin'>SignIn</Link> : ''}
			 {userToken ? <Link to='/dashboard'>Dashboard</Link> : ''}
			 {userToken ? 
				<Link to='/' onClick={handleSignOut} className='btn btn-danger'>
					Sign Out
				</Link> : ''}
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>


       
	
		
			
		</>
	);
}

export default NavBar;
