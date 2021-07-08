import React from 'react';
import { Table } from 'react-bootstrap';


const SubjectShow = ({subject}) => {
    return (
        <div>
           <Table striped bordered hover>
            <thead>
    <tr>
      <th>Subject name</th>
      <th>Student Name</th>
      
      

    </tr>
  </thead>
  <tbody>
  <tr>
      <td>{subject.subject}</td>
      <td>{subject.name1} , {subject.name2}</td>
      
    
    </tr>
  </tbody>

        </Table>
         
        </div>
    );
};

export default SubjectShow;