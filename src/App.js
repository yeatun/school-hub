import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import AddProfile from "./Components/Home/AddProfile/AddProfile";
import Home from "./Components/Home/Home/Home";
import ProfileDetails from "./Components/Home/ProfileDetails/ProfileDetails";
// import StudentList from "./Components/StudentList/StudentList/StudentList";




function App() {
  return (
    <Router>
    <Switch>
      <Route exact path ="/home">
      <Home></Home>
      </Route>
      <Route path ="/profile">
     <AddProfile></AddProfile>
      </Route>
      <Route path ="/profileDetails/:_id">
     <ProfileDetails></ProfileDetails>
      </Route>
      {/* <Route  path ="/students">
     <StudentList></StudentList>
      </Route> */}
      
    </Switch>
  </Router>
  );
}

export default App;
