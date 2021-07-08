import React, { } from 'react';
import { Link } from 'react-router-dom';



const StoriesInfo = ({newPost}) => {
 


//   const handleDelete = (id) => {
//     fetch(`https://sleepy-bayou-04521.herokuapp.com/deleteProduct/${id}`, {
//         method: 'DELETE'
//     })
//         .then(res => res.json())
//         .then(result => {
//             // console.log('delete successfully');
//             alert('blog deleted successfully ');
//         })
// }
    return (
        <div   className="col-sm-3 "  >
     
     <div className="border m-2">
    <div className="blogs blog-content">

         <h5 className="text-dark text-center">{newPost.name}</h5>
        <p className="text-dark text-center">{newPost.email}</p>
        <p className="text-dark text-center">{newPost.phone}</p>
        <p className="text-dark text-center">{newPost.birth}</p>
        {/* <p className="text-dark text-center">{newPost.sub1}</p>
        <p className="text-dark text-center">{newPost.sub2}</p> */}
          <div className='row '>
          <div  className='text-center p-2'>
         <Link  to={`/ProfileDetails/${newPost._id}`} className='btn btn-dark '>Visit Profile</Link> 
          </div>
        
        
         {/* <button className="btn btn-danger " onClick={() => handleDelete(newPost._id)}       ><FontAwesomeIcon icon={faTrashAlt} /></button> */}
         </div>
          </div>
    </div>
    </div>
   
   
    
    );
};

export default StoriesInfo;