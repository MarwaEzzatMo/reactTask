
import './App.css';   
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, Routes , Navigate } from 'react-router-dom';  
import Header from './componant/Header'; 
import Footer from './componant/Footer';
import Homepage  from './componant/Homepage' ; 
import ErrorPage from './componant/ErrorPage.jsx'; 
import Login from './componant/Login.jsx';  
import { useState } from 'react';
import UsersTable from './componant/UsersTable.jsx' ;
import Profile from './componant/Profile';




function App() { 

  let [body,setBody] = useState("");
  let [title,setTitle] = useState("");
  let [email,setemail] = useState("");

  let onBody = (data) => {
    setBody(data);
  }

  let onTitle = (tData) => {
    setTitle(tData);
} 

let onEmail = (eData) => {
  setemail(eData);
} 


  return (
    <>   
    <Header/>
    <Routes> 
      <Route path= '/'  element = {<Navigate to = '/home'/>} />
    <Route path='/home' element = {<Homepage />} />  
    <Route path = '/AllUsers'  element = { <UsersTable  onBody = {onBody} onTitle = {onTitle} onEmail={onEmail}/> } /> 
   <Route path='/profile' element = {<Profile body={body} title={title} email={email}/>} />
    <Route path ='/login' element = { <Login />} /> 
    < Route path='*' element = { < ErrorPage /> } />   
    
     
     
   </Routes> 
   <Footer/>
    </>
  );
}

export default App;
