
// import { RouterProvider } from 'react-router-dom';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import About from './Pages/About/About';
import AboutClass from './Pages/AboutClass/AboutClass';
import Classes from './Pages/Classes/Classes';
import Contact from './Pages/Contact/Contact';

import Dashboard from './Pages/DashBoard/Dashboard/Dashboard';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Footer from './Pages/Footer/Footer';
import Gallary from './Pages/Gallary/Gallary';
import Home from './Pages/Home/Home';
import Instructors from './Pages/Instructors/Instructors';
import Navbar from './Pages/NavBar/Navbar';
import LoginPage from './Pages/RegisterPage/LoginPage/LoginPage';
import PrivateRoute from './Pages/RegisterPage/PrivateRoute/PrivateRoute';
import SignupPage from './Pages/RegisterPage/SignupPage/SignupPage';




function App() {
 
  return (
    
    

      <Router>
    {/* <Navbar></Navbar> */}
        <Switch>

 

  <Route exact path="/">
    <Home></Home>
  </Route>

  <Route path="/home">
    <Home></Home>
  </Route>

  <Route path="/classes">
    <Classes></Classes>
  </Route>
  

  <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>

  <PrivateRoute path="/instructors">
    <Instructors></Instructors>
  </PrivateRoute>

  <PrivateRoute path="/aboutclass/:serviceId">
              <AboutClass></AboutClass>
            </PrivateRoute>

  <Route path="/login">
    <LoginPage></LoginPage>
  </Route>

  <Route path="/signup">
    <SignupPage></SignupPage>
  </Route>

  

  <Route path="/aboutus">
    <About></About>
  </Route>

  <PrivateRoute path="/contact">
        <Contact></Contact>
      </PrivateRoute>

  <Route path="/gallary">
    <Gallary></Gallary>
  </Route>

  <Route path="*">
        <ErrorPage></ErrorPage>
      </Route>

</Switch>
{/* <Footer></Footer> */}
    </Router>
    
  )
}

export default App



