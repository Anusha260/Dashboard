import React,{useState} from "react";

import { useNavigate } from 'react-router-dom'
export default function  Signup(){
    const navigate = useNavigate()
    const[username,setUserName]=useState(" ")
    const[email,setEmail]=useState(" ")
    const[password,setPassword]=useState(" ")
    const[verify,setVerify]=useState(" ")
    const[boolean,setBoolean]=useState(false)
    
    function submit(){
        if(username===""){
            alert("name can't be empty")
            setBoolean(false)
        }
        else if(username.length<=5 || username.length>=15){
            setBoolean(false)
            alert('name should be greater then 5 letters ')
        }
        else if(email===""){
           
            alert("email can't be empty")
            setBoolean(false)
        }
        else if(password===""){
            
            alert("password can't is empty")
            setBoolean(false)
        }
        else if(password!==verify){
            setBoolean(false)
            alert("password is not match")
        }
        else if(username!=="" && email!=="" && password!=="" && verify!==""){
            // setBoolean(true)
                
                 navigate('/Dashboard')
        }
        else if(password===verify){
            setBoolean(true)
        }
    }

    return(
        <div>
            <div id="box">
                <h1>Signup</h1><br></br>
            <label id="lname"><b>Username : </b> </label>
            <input ty
            pe="text" autoComplete="off" id="username" onChange={(e)=>{
                setUserName(e.target.value)
            }}  /><br></br><br></br>
            <label id="lemail"><b>Email :  </b></label>
            <input type="email" autoComplete="off" id="email" onChange={(e)=>{
               
                setEmail(e.target.value)
            }} /><br></br><br></br>
            <label id="lpassword"><b>Password : </b> </label>
            <input type="password" autoComplete="off" id="password" onChange={(e)=>{
                setPassword(e.target.value)
            }} /><br></br><br></br>
            <label id="labelconfirm"><b>Confirm : </b> </label>
            <input type="password" autoComplete="off" id="confirmpassword" onChange={(e)=>{
                setVerify(e.target.value)
            }}/><br></br><br></br>

            
            <label id="labletechnologies"><b>Technologies : </b> </label>
            <select name="technologies" id="technologies">
    
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="scala">Scala</option>
                <option value="spark">Spark</option>
    
            </select><br></br>
            <button id="submit" onClick={() =>{
                 submit()
                 {boolean ? navigate('/Dashboard') :<Signup/>}}}>submit</button>
            </div>
        </div>
    )
}


