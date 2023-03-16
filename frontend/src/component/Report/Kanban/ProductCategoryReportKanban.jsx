import { FastfoodRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";

function ProductCategoryReportKanban(props) {
    console.log(props)

    return (<>
    <div class="list-group">

  <a class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1"><Avatar>
        
        
    <FastfoodRounded></FastfoodRounded>
        </Avatar></h5>

      <h5 class="mb-1">{props.product_categ.product_name}</h5>
      <small class="text-muted"></small>
    </div>
    <hr></hr>
    <div class="mb-1">
     <div className="row">
     {props.product_categ.state.map((state_status)=>(
   <div className="col-4">
<div class="p-3 mb-2 bg-secondary text-white"> {state_status[0]} <br></br>{state_status[1]}</div>


   </div>


           

        ))}
     </div>
 
    </div>
  </a>
  
</div>
    </>  );
}

export default ProductCategoryReportKanban;