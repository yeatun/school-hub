import React from 'react';
import { Table } from 'react-bootstrap';


const AllList = ({info}) => {
    const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteProduct/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(result => {
            // console.log('delete successfully');
            alert('blog deleted successfully ');
        })
}
    return (
        <div>
            
            <Table striped bordered hover>
            <thead>
    <tr>
      <th>student name</th>
      <th>email</th>
      <th>phone no</th>
      <th>birth date</th>
      <th>Subjects</th>
      <th>Delete</th>

    </tr>
  </thead>
  <tbody>
  <tr>
      <td>{info.name}</td>
      <td>{info.email}</td>
      
      <td>{info.phone}</td>
      <td>{info.birth}</td>
      <td>{info.sub1},{info.sub2}</td>
      <td> <button onClick={() => handleDelete(info._id)}   className='btn btn-danger'>Delete</button></td>
    </tr>
  </tbody>

        </Table>


           
        </div>
    );
};

export default AllList;