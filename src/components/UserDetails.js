import React from 'react';
import '../App.css';
export const UserDetails=(props)=>{
  return(
       <tr>
         <td>{props.data.id}</td>
         <td>{props.data.name}</td>
         <td>{props.data.age}</td>
         <td>
             <button onClick={props.editData} class="btn btn-info">Edit</button>
             <span className="margin"></span>
             <button onClick={props.deleteData} class="btn btn-danger">Delete</button>
         </td>
       </tr>
   );
}