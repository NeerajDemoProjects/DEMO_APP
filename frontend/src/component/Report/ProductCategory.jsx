import { Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import OrderSearch from "../DashBoard/OrderSearch/OrderSearch";
import Loading from "../Loading/Loading";
import ProductReportCategFilter from "./Filter/ProductReportCategFilter";
import ProductCategoryReportKanban from "./Kanban/ProductCategoryReportKanban";
import ProductReportKanban from "./Kanban/ProductReportKanbam";

function ProductCategoryReport() {

    const url ='http://192.46.214.237:8000/api/report/category'
    const [product_categ_report,setProductCategReport]=useState([])
    const [is_loading,setLoading]=useState(false)
    
    const updatefilter = (state)=>{
        setProductCategReport(state)
    }
    useEffect(() => {
    
        
        axios.get(url)
        .then(response => {
            setProductCategReport(response.data)

            setLoading(true)
        })
    }, []);
    return (<>
         
            <div className="container">

        <ProductReportCategFilter updatefilter={updatefilter}></ProductReportCategFilter>
            <br></br>
        </div>
        <br></br>

        <br></br>
        
        {is_loading?<div className="container">
            <div className="row">

            {product_categ_report.map((product_categ)=>(
 <div className="col-4">
<ProductCategoryReportKanban product_categ={product_categ}></ProductCategoryReportKanban>

 </div>


                ))}
          
            </div>
               

        </div>:<Loading></Loading>}
        </> );
}

export default ProductCategoryReport;