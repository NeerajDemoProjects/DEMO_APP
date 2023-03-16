import { useState } from "react";
import { Link } from "react-router-dom";

function BranchKanbanProduct(props) {
    const [user,setUser] =useState()

    return (<>
    <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">{props.branch.branchname}</h5>
    <Link to={`/branch/product/report?user_id=${props.branch.user_id}`}>
    <button type="button" class="btn btn-outline-danger">View Product Report</button>

    </Link>
    </div>
    <p class="mb-1">Latitude : {props.branch.latitude} </p>
    <p class="mb-1">Logitude : {props.branch.longitude}</p> 
  </a>
  
</div>
<br></br>
    </>  );
}

export default BranchKanbanProduct;