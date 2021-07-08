import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='navar-container'>
         
             <nav class="navbar navbar-expand-lg navbar-light  text-white">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
   <ul>
   <li class="nav-item ">
   <Link class="nav-link ms-5 text-brand " to="/home"> <h1>School Hub</h1></Link>
        </li>
   </ul>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
     
        
         <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/">Home</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/students">List of students</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/subjects">List of subjects</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/pro">Update students profile</Link>
        </li>

        
       
      
       
       
      
     
       
        {/* <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/login">login</Link>
        </li> */}
        
      
      
      </ul>
      
    </div>
  </div>
</nav>

        </div>
    );
};

export default Navbar;