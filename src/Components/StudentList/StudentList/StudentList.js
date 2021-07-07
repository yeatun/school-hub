// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import AllList from './AllList';






// const StudentList = () => {
   
//     const [order, setOrder] = useState([])

//     useEffect(() => {
//         fetch(`http://localhost:5000/student`, {
//             method: "GET",
//             headers: { 'Content-Type': 'application/json' }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 setOrder(data)
//             })
//     }, [])

//     return (
//         <div>
//            <ul>
//                {
//                    order.map(order => <AllList order ={order}></AllList>)
//                }
//            </ul>
//         </div>
//     );
// };

// export default StudentList;