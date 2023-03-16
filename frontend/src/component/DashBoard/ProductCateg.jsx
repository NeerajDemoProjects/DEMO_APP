import { useEffect, useState } from "react";
import axios from 'axios';
import ProductKanban from "./ProductKanban/ProductKanban";
import ProductSearch from "./ProductKanban/ProductSearch";
import Paper from '@mui/material/Paper';
import Loading from "../Loading/Loading";
import ProductCategSearch from "./ProductKanban/ProductCategSearch";

function ProductCategScreen() {
   
    const [product_categ_list ,setProductCategList]= useState([])
    const [is_loading,setIsloading]=useState(false)

    const handlefilter = (state)=>{

        setProductCategList(state)
    }
    useEffect(() => {

        
        axios.get("http://192.46.214.237:8000/api/product_categs")
        .then(response => {
            setProductCategList(response.data.results)
            setIsloading(true)

        })
    }, []);
    console.log(product_categ_list)
    return (<>

<Paper elevation={3} >
<div className="container">
    <br></br>
<ProductCategSearch handlefilter={handlefilter}></ProductCategSearch>
<br></br>
    </div>
    </Paper>
 <div className="container">
    <br></br>
   
    </div>
    
    {is_loading?<div class="container">
<br></br>
  <div class="row">

    {product_categ_list.map((item)=>(




    <div class="col-3">
    <ProductKanban name={item.name} ></ProductKanban>
    <br></br>   

    </div>
    












    
    ))}
      </div>
</div>:<Loading></Loading>}
    </> );
}

export default ProductCategScreen;