

// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
// import About from "../About/About";
// import Classes from "../Classes/Classes";
// import Contact from "../Contact/Contact";

// import Dashboard from "../DashBoard/Dashboard/Dashboard";
// import ErrorPage from "../ErrorPage/ErrorPage";
// import Footer from "../Footer/Footer";
// import Gallary from "../Gallary/Gallary";
// import Home from "../Home/Home";
// import Instructors from "../Instructors/Instructors";
// // import Main from "../Layout/Main";
// import Navbar from "../NavBar/Navbar";
// import LoginPage from "../RegisterPage/LoginPage/LoginPage";
// import PrivateRoute from "../RegisterPage/PrivateRoute/PrivateRoute";
// import SignupPage from "../RegisterPage/SignupPage/SignupPage";
// import ViewClasses from "../ViewClasses/ViewClasses";
// import ViewClasses from '../ViewClasses/ViewClasses'; 
// import { BrowserRouter as Router } from "react-router-dom";



//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element:<Main></Main>,
//       children:[
//     {
//       path:"/",
//       element:<Home></Home>
//     },
//     {
//       path:"/classes",
//       element:<Classes></Classes>
//     },
//     {
//       path:"/dashboard",
//       element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
//     },
//     {
//       path:"/instructors",
//       element:<PrivateRoute><Instructors></Instructors></PrivateRoute>
//     },
//     {
//       path:"/navbar",
//       element:<Navbar></Navbar>
//     },
//     {
//       path:"/login",
//       element:<LoginPage></LoginPage>
//     },
//     {
//       path:"/signup",
//       element:<SignupPage></SignupPage>
//     },
//     {
//       path:"/footer",
//       element:<Footer></Footer>
//     },
//     {
//       path:"/aboutus",
//       element:<About></About>
//     },
//     {
//       path:"/contact",
//       element:<Contact></Contact>
//     },
    
//     {
//       path: "/classDetails/:id",
//       loader:async({params})=>await fetch(`https://artsoul.onrender.com/classes/${params.id}`),
//       element:<ViewClasses></ViewClasses>
//     },
//     {
//       path:"/gallary",
//       element:<PrivateRoute><Gallary></Gallary></PrivateRoute>
//     }
 

// ]
  
    
//     },
//     {
//         path:"*",
//         element:<ErrorPage></ErrorPage>
//     }
    
  
//   ]);



function router() {
  return (

<div>
  
   
      {/* <Switch>

      <Route path="/classDetails/:id" element={<ViewClasses />} />
      <Route path="/navbar" element={<Navbar />} />

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

        <PrivateRoute path="/isntructors">
          <Instructors></Instructors>
        </PrivateRoute>

        <Route path="/navbar">
          <Navbar></Navbar>
        </Route>

        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>

        <Route path="/signup">
          <SignupPage></SignupPage>
        </Route>

        <Route path="/footer">
          <Footer></Footer>
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

      </Switch> */}
 
  
</div>
  );
}
export default router;