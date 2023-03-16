import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import UserKanban from "./Kanban/UserKanban";

function UserView() {
    const users_url = 'http://192.46.214.237:8000/auth/users/'
    const [user_list ,setUserList]= useState([])
    const [is_loading ,setLoading]= useState(false)

    useEffect(() => {
    
        
        axios.get(users_url)
        .then(response => {
            setUserList(response.data.results)
            setLoading(true)

        })
    }, []);
    console.log(user_list)
    
    return ( <>
    <br></br>
    {is_loading?<div className="container">
        <div className="row">
            {user_list.map((user)=>(
            <div className="col-3"><UserKanban name={user.username} email={user.email}></UserKanban></div>


  )          )}
  

        </div>
    </div>:<Loading></Loading>}
    </>  );
}

export default UserView;