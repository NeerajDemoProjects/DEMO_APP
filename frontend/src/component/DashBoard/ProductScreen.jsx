import { Paper } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading.jsx';
import ProductKanban from './ProductKanban/ProductKanban';
import ProductSearch from './ProductKanban/ProductSearch';

function ProductScreen() {

    const [search,setSearch]=useState('')
    const [product_list ,setProductList]= useState([])
    const [is_loading,setIsloading]=useState(false)

    const HandleFilter = (state) =>{
        setProductList(state)


    }



    const changeSearch =(state) =>{
        setSearch(state)
    }
    useEffect(() => {
    
        
        axios.get("http://192.46.214.237:8000/api/products")
        .then(response => {
            setProductList(response.data.results)

            setIsloading(true)
        })
    }, []);
    const location = useLocation()

    console.log(location)

    return (<>
   

    {is_loading?<div class="container">

    
    
    <div className="container">
<br></br>

<ProductSearch HandleFilter={HandleFilter}></ProductSearch>
<br></br>
</div>
<br></br>
  <div class="row">
    {product_list.map((item)=>(

    <div class="col-3">
    <ProductKanban name={item.name}></ProductKanban>
    <br></br>   

    </div>












    
    ))}
      </div>
</div>:<Loading></Loading>}


    </>  );
}

export default ProductScreen;