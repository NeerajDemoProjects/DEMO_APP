import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import BranchKanban from "./Kanban/BranchKanban";

function BranchView() {


    const branch_url = 'http://192.46.214.237:8000/api/branch'
    const [branch_list ,setBranchrList]= useState([])
    const [is_loading ,setLoading]= useState(false)

    useEffect(() => {

        
        axios.get(branch_url)
        .then(response => {
            setBranchrList(response.data.results)
            setLoading(true)

        })
    }, []);
    console.log(branch_list)
    return ( <>
    <br></br>

    {is_loading?<div className="container">
        <div className="row">
        {branch_list.map((branch)=>(

<div className="col-3"><BranchKanban name={branch.branchname} latitude ={branch.latitude} longitude={branch.longitude}></BranchKanban></div>



        ))}
        

        </div>
    </div>: <Loading></Loading>  }
      </> );
}

export default BranchView