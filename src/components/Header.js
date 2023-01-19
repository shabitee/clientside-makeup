import { Link, redirect } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
// import '../styles/Header.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../login/LoginButton";


function Header() {
    const { isAuthenticated} = useAuth0();
    return(
        <Navbar bg="dark" variant="dark">
             <Navbar.Brand>Makeup by: TSharp</Navbar.Brand>
             
             <Link to='/'>Products</Link>
             <Link to='/fav'>Favourites</Link>
             <Link to='/about'>About</Link>
             <Link to='/profile'>Profile</Link>
             {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        </Navbar>
    )
}

export default Header;