import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function ProductFilterBranch(props) {
    const location = useLocation();
    const [from ,setFromDate] = useState()
    const [to ,setToDate] = useState()
    const [user,setUser] = useState("?user_id=1")
   

    const handleFilterProduct = (e) =>{
        const url ="http://192.46.214.237:8000"+location.pathname+props.query.split('&&from')[0]+"&&from="+from+"&&to="+to
        console.log(url)
        axios.get(url).then((response)=>{

            props.handleFilter(response.data)
               })
               }
            
    

    return ( <>
    
    <div className="container">
        <br></br>
    <div class="d-flex">
        <input type="date" class="form-control" onChange={(e)=>setFromDate(e.target.value)} ></input>
        <input type="date" class="form-control" onChange={(e)=>setToDate(e.target.value)}></input>
   
      
        <button class="btn btn-outline-danger"   onClick={(e) => handleFilterProduct(e)} >Search</button>

      

    </div>

      
 
      </div>
    </> );
}

export default ProductFilterBranch;