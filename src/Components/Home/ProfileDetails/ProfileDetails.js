import React, { useEffect, useState } from 'react';

import {  useHistory, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';


const ProfileDetails = () => {
    const {_id} =useParams();

    const history = useHistory();
  
 
    const [profile ,setProfile] = useState([]);
   
    const handleCheckOut = () =>{

     

        const StudentDetails = { ...profileList}
        console.log(StudentDetails);
    
        fetch('http://localhost:5000/addStudent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(StudentDetails)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
      

    }



    useEffect(() => {
        fetch('http://localhost:5000/newService')
        .then(res => res.json())
        .then(data => setProfile(data))
    }, [])
   
    const profileList =  profile.find(profiles =>profiles?._id===_id)
  
    

    return (
        <div className="container-fluid row">
         <Navbar></Navbar>
           <div className=" p-5 text-center">
           
           <h1>{profileList?.name}</h1>
           <p className='text-secondary'>{profileList?.email}</p>
           <p className='text-secondary'>{profileList?.phone}</p>
           <p className='text-secondary'>{profileList?.birth}</p>
           <p className='text-secondary'>{profileList?.sub1}</p>
           <p className='text-secondary'>{profileList?.sub2}</p>
           <Link to="/students" className="btn btn-success" onClick={handleCheckOut}>check Out</Link>
          
           </div>
           
         
        </div>
    );
};

export default ProfileDetails;