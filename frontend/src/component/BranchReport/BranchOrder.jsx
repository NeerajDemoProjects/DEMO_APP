import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import BranchKanbanOrder from "./KanbanView/BranchKanbanOrder";

function BranchOrder() {

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


    return (  <> 
    
    {is_loading?<div className="container">
        <br></br>
        <div className="row">

                {branch_list.map((branch)=>(
            <div className="col-4"><BranchKanbanOrder branch={branch}></BranchKanbanOrder></div>


                ))}
            
        </div>
    </div>:<Loading></Loading>}</>);
}

export default BranchOrder;