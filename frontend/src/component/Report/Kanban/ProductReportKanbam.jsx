import { FastfoodRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";

function ProductReportKanban(props) {
    return (<>
     <div class="list-group">

<a  class="list-group-item list-group-item-action">
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1"><Avatar><FastfoodRounded></FastfoodRounded>
</Avatar></h5>
    <h5 class="mb-1">{props.product.product_name}</h5>
 

  </div>
<hr></hr>


<div id="accordion">






    <div className="row">
  
        {props.product.state.map((state_state)=>(
<div className="col-4">

<div class="p-3 mb-2 bg-secondary text-white">

    <div className="col-2">{state_state[0]} </div>
    <div className="col-2">     {state_state[1]}</div>
            
       

</div>
        
           </div>
        ))


        }
  
    </div>




 
   
</div>










</a>
</div> 
<br></br>
    
    </>  );
}

export default ProductReportKanban;