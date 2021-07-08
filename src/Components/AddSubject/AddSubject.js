
import React, {} from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../Home/Navbar/Navbar';



const AddSubject = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
   
  const onSubmit = data => {
      console.log(data)
      const addPost = {
       
       subject:data.subject,
       name1:data.name1,
       name2:data.name2
      };
      const url = `http://localhost:5000/addSubject`;
    
      fetch(url, {
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(addPost)
      })
      .then(res => alert('student profile successfully posted',res))
    };

    return (
    <div className="container-fluid row">
        <Navbar></Navbar>
  
         <div className="col-md-8" >
             <h2 className='p-5'>Add student Profile</h2>
        
         <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Subject</label>
                        <br/>
                        <input name="subject" type="text" {...register("subject")}  placeholder='subject' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name1</label>
                        <br/>
                        <input name="name1" type="text" {...register("name1")}  placeholder='name1' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name2</label>
                        <br/>
                        <input name="name2" type="text" {...register("name2")}  placeholder='name2' className="form-control" />
                    </div>
                  
                  
                  
                  
                  
                    <br/>
                    <input type="submit" />
                </form>
         </div>
    </div>
    );
};

export default AddSubject;