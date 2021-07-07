import React, { useEffect, useState } from 'react';

import {  useHistory, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';



const ProfileDetails = () => {
    const {_id} =useParams();

    const history = useHistory();
  
 
    const [profile ,setProfile] = useState([]);

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
         
         
           </div>
           
         
        </div>
    );
};

export default ProfileDetails;