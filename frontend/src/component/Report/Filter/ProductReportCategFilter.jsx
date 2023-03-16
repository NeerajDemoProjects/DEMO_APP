import axios from "axios";
import { useState } from "react";

function ProductReportCategFilter(props) {
    const [from,setFromDate] = useState(null)
    const [to,setToDate] = useState(null)
    
    const handleSearch =()=>{
        var url ='http://192.46.214.237:8000/api/report/productCatge/date?'

        if (from && to){

            url=url+"from="+from+"&&to="+to

            axios.get(url).then((response)=>{
                console.log(url)
                console.log(response.data)
                props.updatefilter(response.data)
        
              })


              console.log(url)


        }


        
        console.log(url)

    }

    return (  <>
    <div className="container">
        <br></br>
    <div class="d-flex">
        <input type="date" class="form-control" onChange={(e)=>setFromDate(e.target.value)}  ></input>
        <input type="date" class="form-control"   onChange={(e)=>setToDate(e.target.value)}></input>
        <button class="btn btn-outline-danger" onClick={handleSearch}>Search</button>

    </div>

      
 
      </div>
    </>);
}

export default ProductReportCategFilter;