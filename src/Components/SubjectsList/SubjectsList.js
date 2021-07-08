import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import SubjectShow from './SubjectShow';




const SubjectsList = () => {
    const [sub, setSub] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/newSub')
        .then(res => res.json())
        .then(data => setSub(data))
    }, [])
    
    return (
        <div>
           
            
            <Navbar></Navbar>
               
        <div>
        {
                     sub.map(subject => <SubjectShow
                        subject={subject} key={subject.id}/>)
                 }
        </div>
         
           </div>
         
      
 
       
    );
};

export default SubjectsList;