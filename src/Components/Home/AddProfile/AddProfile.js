
import React, {} from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../Navbar/Navbar';


const AddProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
   
  const onSubmit = data => {
      console.log(data)
      const addPost = {
       
       name:data.name,
       email:data.email,
        phone: data.phone,
        birth: data.birth,
        sub1: data.sub1,
        sub2:data.sub2
      };
      const url = `http://localhost:5000/addPost`;
    
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
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <br/>
                        <input name="name" type="text" {...register("name")}  placeholder='name' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">email</label>
                        <br/>
                        <input name="email" type="text" {...register("email")}  placeholder='email' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">phone</label>
                        <br/>
                        <input name="phone" type="text" {...register("phone")}  placeholder='phone' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">birth</label>
                        <br/>
                        <input name="birth" type="text" {...register("birth")}  placeholder='birth' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Subject 1</label>
                        <br/>
                        <input name="sub1" type="text" {...register("sub1")}  placeholder='sub1' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Subject 2</label>
                        <br/>
                        <input name="sub2" type="text" {...register("sub2")}  placeholder='sub2' className="form-control" />
                    </div>
                  
                  
                    <br/>
                    <input type="submit" />
                </form>
         </div>
    </div>
    );
};

export default AddProfile;