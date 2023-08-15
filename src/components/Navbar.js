import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast';
function Navbar(props) {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    return (
        <div className='navBar'>
            <Link to="/">
                <img src={logo} alt="MainLogo" width={160} height={32} loading='lazy' />
            </Link>
            <nav>
                <ul className='nav-links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </nav>
            <div className='buttons'>
                {!isLoggedIn && <Link to="/login"><button>Login</button></Link>}
                {!isLoggedIn && <Link to="/signup"><button>SignUp</button></Link>}
                {isLoggedIn && <Link to="/"><button onClick={() => { setIsLoggedIn(false); toast.success('Logged Out') }}>Logout</button></Link>}
                {isLoggedIn && <Link to="/dashboard"><button>Dashboard</button></Link>}
            </div>
        </div>
    )
}

export default Navbar