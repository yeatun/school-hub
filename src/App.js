import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import AddSubject from "./Components/AddSubject/AddSubject";

import AddProfile from "./Components/Home/AddProfile/AddProfile";
import Home from "./Components/Home/Home/Home";
import ProfileDetails from "./Components/Home/ProfileDetails/ProfileDetails";
import StudentList from "./Components/StudentList/StudentList/StudentList";
import SubjectsList from "./Components/SubjectsList/SubjectsList";
// import AddProfile from "./Components/Home/AddProfile/AddProfile";
// import Home from "./Components/Home/Home/Home";

// import ProfileDetails from "./Components/Home/ProfileDetails/ProfileDetails";
// import StudentList from "./Components/StudentList/StudentList/StudentList";





function App() {
  return (
    <Router>
    <Switch>
      <Route exact path ="/">
      <Home></Home>
      </Route>
      <Route  path ="/pro">
      <AddProfile></AddProfile>
      </Route>
      <Route  path ="/sub">
      <AddSubject></AddSubject>
      </Route>
      <Route  path ="/ProfileDetails/:_id">
      <ProfileDetails></ProfileDetails>
      </Route>
      <Route  path ="/students">
      <StudentList></StudentList>
      </Route>
      <Route  path ="/subjects">
      <SubjectsList></SubjectsList>
      </Route>
      {/* <PrivateRoute path="/blogDetails/:_id">
         <BlogDetails></BlogDetails>
        </PrivateRoute>
        <PrivateRoute path="/admin">
         <AddNewAdmin></AddNewAdmin>
        </PrivateRoute>
      <PrivateRoute path ="/blogPost">
      <BlogPost></BlogPost>
      </PrivateRoute>
        <Route  path ="/login">
        <Login></Login>
      </Route>
      <Route  path ="/adminLogin">
        <AdminLogin></AdminLogin>
      </Route> */}
    </Switch>
  </Router>



  //   <Router >
  
  //   <Switch>
  //     <Route path ="/">
  //     <Home></Home>
  //     </Route>
  //     <Route exact path ="/pro">
  //    <AddProfile></AddProfile>
  //     </Route>
  //     <Route path ="/ProfileDetails/:_id">
  //    <ProfileDetails></ProfileDetails>
  //     </Route>
  //     {/* <Route  path ="/students">
  //    <StudentList></StudentList>
  //     </Route> */}
      
  //   </Switch>
   
  // </Router>
  );
}

export default App;
