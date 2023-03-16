import { ConstructionOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { flexbox } from "@mui/system";
import axios from "axios";
import {  useState } from "react";

function LoginForm() {


    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    const [message,setAlert] = useState("")


    const handleLogin =(e)=>{

        
    axios.post('http://192.46.214.237:8000/auth/jwt/create',{
      "username":username,
      "password":password

    })
    .then(response => {
      if (response.data.access){
        localStorage.setItem('access', response.data.access)

        axios.defaults.headers.common['Authorization'] = "JWT "+localStorage.getItem('access');
        window.location.reload(false);


      }

      })
    }
    




    return ( <>
    <div className="container" style={{display:"flex",justifyContent:"center" ,padding:"10%"}}>
        <br></br>
,
    <div class="list-group " >
        
  <div href="#" class="list-group-item  flex-column align-items-start">
    <br></br>
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">
<div style={{justifyContent:"center",display:"flex"}}>
<Avatar style={{width:"100px",height:"100px"}}></Avatar>

</div>
<br></br>

{message}

      <div>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e)=>setUsername(e.target.value)}   aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control " id="exampleInputPassword1"  onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
  </div>
<br></br>
<br></br>

  <button class="btn btn-danger" onClick={(e)=>handleLogin(e)}>Submit</button>
</div>




      </h5>
      <small class="text-muted"></small>
    </div>
  </div>
  
</div>

    </div>
  
    
    
    </> );
}

export default LoginForm;