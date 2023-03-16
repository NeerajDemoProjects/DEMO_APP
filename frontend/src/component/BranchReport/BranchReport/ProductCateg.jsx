import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../../Loading/Loading";
import ProductReportKanban from "../../Report/Kanban/ProductReportKanbam";
import ProductCategFilterBranch from "../Filters/ProductCategFilterBranch";

function BranchReportProductCateg() {
  const location =useLocation()

  const branch_url ="http://192.46.214.237:8000"+ location.pathname+location.search
  const [product_list ,setProductList]= useState([])
  const [is_loading ,setLoading]= useState(false)

console.log(branch_url)
  const handleFilter = (state)=>{
    setProductList(state)
  }
  useEffect(() => {

  
      axios.get(branch_url)
      .then(response => {
        setProductList(response.data)
          setLoading(true)

      })
  }, []);
    return (<>
    <ProductCategFilterBranch handleFilter={setProductList}></ProductCategFilterBranch>
    <br></br>
    {is_loading?<div className="container">
            <div className="row">

                {product_list.map((product)=>(

<div className="col-4"><ProductReportKanban product={product}></ProductReportKanban></div>

                ))}
            


            </div>
        </div>:<Loading></Loading>}
        

    </>  );
}

export default BranchReportProductCateg;