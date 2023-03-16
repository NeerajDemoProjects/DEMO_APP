import Paper from '@mui/material/Paper';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { useState } from 'react';

function OrderSearch(props) {
  const [from,setFromDate] = useState(null)
  const [to,setToDate]=useState(null)
  const [search,setSearch] = useState(null)
  const [filter_order,setFilter] = useState([])


  const HandleLiveSearch = (e)=>{

    setSearch(e.target.value)
    var url ='http://192.46.214.237:8000/api/report/order/date?search='+e.target.value


    axios.get(url)
    .then(response => {
      props.updateOrderList(response.data)
    })


  }
  const  handleSearch =()=>{
    var url ='http://192.46.214.237:8000/api/report/order/date';
    if (search){

      url= url+"?search="+search
      if (to && from){
        url =url+" &&from="+from+"&&to="+to
      }
    }
    else{

      if (to && from){
        url =url+"?from="+from+"&&to="+to
      }



    }

    

    axios.get(url)
    .then(response => {
      props.updateOrderList(response.data)
    })

    if (! (to || from || search)) 
    {
      var url ='http://192.46.214.237:8000/api/order';

       axios.get(url)
    .then(response => {
      props.updateOrderList(response.data)
    })


    }



    

    }

   
  


    return (<>  
    

    <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search"  onChange={(e)=>HandleLiveSearch(e)} aria-label="Search"/>
        <input type="date" class="form-control" onChange={(e)=>setFromDate(e.target.value)}  ></input>
        <input type="date" class="form-control"   onChange={(e)=>setToDate(e.target.value)}></input>
        <button class="btn btn-outline-danger" onClick={handleSearch}>Search</button>
 
      </div>
    </>);
}

export default OrderSearch;