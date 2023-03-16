import { Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OrderSearch from "../DashBoard/OrderSearch/OrderSearch";
import Loading from "../Loading/Loading";
import ProductReportFilter from "./Filter/ProductReportFilter";
import ProductReportKanban from "./Kanban/ProductReportKanbam";

function ProductReport() {

    const url ='http://192.46.214.237:8000/api/report/product'
    const [product_report,setProductReport]=useState([])
    const [is_loading,setLoading]=useState(false)

    const updatefilter = (state)=>{
        setProductReport(state)

    }
    useEffect(() => {
    
        
        axios.get(url)
        .then(response => {
            setProductReport(response.data)

            setLoading(true)
        })
    }, []);
    console.log("/",product_report)

return ( <>
    <ProductReportFilter updatefilter={updatefilter}></ProductReportFilter>
            
            <div className="container">
        <br></br>
            <br></br>
        </div>
<br></br>
        
        
        {is_loading?<div className="container">
            <div className="row">

                {product_report.map((product)=>(

<div className="col-4"><ProductReportKanban product={product}></ProductReportKanban></div>


                ))}
            
        

            </div>
        </div>:<Loading></Loading>}
        
    
    
    
    
    
    
    
    </>

        );
}

export default ProductReport;