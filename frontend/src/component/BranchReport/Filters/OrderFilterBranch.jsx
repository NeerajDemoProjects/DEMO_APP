import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function OrderFiltersBranch(props) {

    const [from ,setFrom] = useState(null)
    const [to ,setTo] = useState(null)
    const location = useLocation()
    const url ="http://192.46.214.237:8000"+location.pathname+location.search+"&&from="+from+"&&to="+to

    const handleFilterProductCatege = (e)=>{
        
        
        axios.get(url).then((response)=>{
            console.log("last",url)
            props.handleFilter(response.data)
               })
    }
    return (
        <div className="container">
        <br></br>
    
    <div class="d-flex">
        <input type="date" class="form-control" onChange={(e)=>setFrom(e.target.value)} ></input>
        <input type="date" class="form-control" onChange={(e)=>setTo(e.target.value)}></input>

        <button class="btn btn-outline-danger" onClick={(e)=>handleFilterProductCatege(e)}>Search</button>

    </div>

      
 
      </div>
      );
}

export default OrderFiltersBranch;