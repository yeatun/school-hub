import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Navbar from '../../Home/Navbar/Navbar';
import AllList from './AllList';






const StudentList = () => {
   
    const [infos, setInfos] = useState([])
   
    // const [products , setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/student`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInfos(data)
            })
    }, [])
  
    return (
        <div>
                <div >
                <Navbar></Navbar>
                
           {
                infos.map(info => <AllList info ={info}></AllList>)
            }
           </div>
        </div>
    );
};

export default StudentList;