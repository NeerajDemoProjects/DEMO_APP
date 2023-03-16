import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState } from 'react';

function ProductSearch(props) {
  
  const handleSearch=(e)=>{

    if (e.target.value){
     var url = 'http://192.46.214.237:8000/api/products?search='+e.target.value


     axios.get(url).then((response)=>{

 props.HandleFilter(response.data.results)
    })
    }
    else{

      var url = 'http://192.46.214.237:8000/api/products'

      axios.get(url).then((response)=>{

        props.HandleFilter(response.data.results)

      })

    }


  }










    return (<>
    <form class="d-flex" >
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"   
          onChange={(e)=>handleSearch(e)}
          
          />
      </form>
    </>  );
}

export default ProductSearch;