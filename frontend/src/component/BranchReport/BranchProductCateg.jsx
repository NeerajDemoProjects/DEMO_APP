import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import BranchKanbanProductCateg from "./KanbanView/BranchKanbanProductCateg";

function BranchProductCateg() {

    const branch_url = 'http://192.46.214.237:8000/api/branch'
    const [branch_list ,setBranchrList]= useState([])
    const [is_loading ,setLoading]= useState(false)
    useEffect(() => {

    
        axios.get(branch_url)
        .then(response => {
            setBranchrList(response.data.results)
            setLoading(true)

        })},[])
    
    return (<>
    {is_loading?<div className="container">
    <br></br>

<div className="row">
        {branch_list.map((branch)=>(
    <div className="col-4">

<BranchKanbanProductCateg branch={branch}></BranchKanbanProductCateg>
</div>


        ))}




</div>

</div> :<Loading></Loading>} 
    </>  );
}

export default BranchProductCateg;