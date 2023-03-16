import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import ProductFilterBranch from "./Filters/ProductFilterBranch";
import BranchKanbanProduct from "./KanbanView/BranchProduct";

function BranchProduct() {

    const branch_url = 'http://192.46.214.237:8000/api/branch'
    const [branch_list ,setBranchrList]= useState([])
    const [is_loading ,setLoading]= useState(false)
    const [branch,setBranch]=useState(null)


    
    useEffect(() => {

    
        axios.get(branch_url)
        .then(response => {
            setBranchrList(response.data.results)
            setLoading(true)

        })
    }, []);
    return ( <>



   <br></br>
    {is_loading?<div className="container">
        <br></br>
        <div className="row">

            {branch_list.map((branch)=>(
            <div className="col-4"><BranchKanbanProduct branch={branch} setBranch={setBranch}></BranchKanbanProduct></div>



            ))}
         


        </div>
    </div>:<Loading></Loading>}
    
    
     </> );
}

export default BranchProduct;