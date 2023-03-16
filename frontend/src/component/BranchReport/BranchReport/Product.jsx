import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../../Loading/Loading";
import ProductReportKanban from "../../Report/Kanban/ProductReportKanbam";
import ProductFilterBranch from "../Filters/ProductFilterBranch";

function BranchProductReport() {
  const location =useLocation()

  const branch_url ="http://192.46.214.237:8000"+ location.pathname+location.search
  const [product_list ,setBranchrList]= useState([])
  const [is_loading ,setLoading]= useState(false)


  useEffect(() => {

  
      axios.get(branch_url)
      .then(response => {
          setBranchrList(response.data)
          setLoading(true)

      })
  }, []);

    return ( <>


<ProductFilterBranch query={location.search} handleFilter={setBranchrList}></ProductFilterBranch>

   

        <br></br>
        
        {is_loading?<div className="container">
            <div className="row">

                {product_list.map((product)=>(

<div className="col-4"><ProductReportKanban product={product}></ProductReportKanban></div>


                ))}
            


            </div>
        </div>:<Loading></Loading>}
        
       

    
    
    </> );
}

export default BranchProductReport;