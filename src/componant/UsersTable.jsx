import React ,{useEffect , useState} from "react";  
import Table from 'react-bootstrap/Table';
import {  useNavigate } from "react-router-dom";
import { getAllUsers  } from "../UserAPI/UserAPI";  



export default function UsersTable(props){ 


  let {onBody,onTitle , onemail} = props;

    let [users , setUsers] = useState([]);
 let getUser = async () => {
     try {
        let response = await getAllUsers();
        setUsers(response.data);  
     } catch (error) {
         console.log(error)
     }
 } 

 useEffect(() => {
     getUser();
 } , []);  

 let navigate = useNavigate();

 let goToPosts = (e) => {
     navigate('/profile');
    console.log(e.target.parentElement.previousElementSibling.innerText);
    onBody(e.target.parentElement.previousElementSibling.innerText);
  onTitle(e.target.parentElement.previousElementSibling.previousElementSibling.innerText);
  onemail(e.target.parentElement.previousElementSibling)
 }
 return (


<Table striped bordered hover  className=" py-4 px-5 bg=dark  text-dark expand=lg  alert alert-info text-center"    >
  <thead>
    <tr  className="bg-light p-3 m-3"  style={{width: '25%', height : '60px' }}>
      <th style={{width: '10%'}}>Id</th>
      <th style={{width: '20%'}}>Name</th>
      <th style={{width: '20%'}}>UserNmae</th> 
      <th style={{width: '25%'}}>Email</th> 
      <th style={{width: '25%'}}>Action</th>
    </tr>
  </thead> 
{
  users &&  users.map((user , index) => {
               return (
  <tbody>
    <tr className="bg-light p-3 m-3" style={{width: '25%', height : '60px' }}> 
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td> 
      <td>{user.email}</td> 
      <td>
      <button className="btn btn-warning m-3 ps-3" >edit</button> 
      <button className="btn btn-success m-3 ps-3" onClick={(e) => {goToPosts(e)}}>view</button>
      </td>
    </tr>
     
  </tbody> ) } )  } 
</Table>


    

 )





}