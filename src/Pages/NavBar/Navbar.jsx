import './Navbar.css'
import { Avatar, DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react';



import useAuth from '../Hooks/useAuth';
import logo from '../../assets/logo3.png';
import { Link } from 'react-router-dom';


const Navbars = () => {
  
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar
            className='navbar bg-stone-300'
  fluid={true}
  rounded={true}
>
  
  <Navbar.Brand as={Link} to="/">
    <img src={logo} className="mr-3 h-6  wsm:h-9" alt="Logo" />
    
  </Navbar.Brand>
  
  <div className="flex md:order-2">
    
  {user.email&& (
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={user?.photoURL ? (<Avatar alt="User settings" img={user?.photoURL} rounded={true}/>):<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
      
    >

      <Dropdown.Header>
        <span className="block text-sm">
        {user?.displayName}
        </span>
        <span className="block truncate text-sm font-medium">
          {user?.email }
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        <Link to="/Dashboard">Dashboard</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        onClick={logOut}
      >
        Sign Out
      </Dropdown.Item>
    </Dropdown>
    )}
    {user.email?"":(
      <Link to="/login">
        <button  type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 " >Signin</button>
      </Link>
    )}
    <Navbar.Toggle className='ms-2'/>
    <Flowbite>
</Flowbite>
  </div>
  
  
  <Navbar.Collapse className='mx-20 '>
    <Navbar.Link as={Link} to="/" active={true}>
      Home
    </Navbar.Link>
    {/* <Navbar.Link as={Link} to="/classes">
    Classes
    </Navbar.Link> */}
    <Navbar.Link as={Link} to="/Dashboard">
    Dashboard
    </Navbar.Link>
    <Navbar.Link as={Link} to="/instructors">
    Instructors
    </Navbar.Link>
    <Navbar.Link as={Link} to="/classes">
    Classes
    </Navbar.Link>
    
    <Navbar.Link as={Link} to="/aboutus" >
    About us
    </Navbar.Link>
    <Navbar.Link as={Link} to="/contact" >
    Contact us
    </Navbar.Link>
    
  </Navbar.Collapse>
</Navbar>
        </>

    
    
    
    );
};

export default Navbars;




