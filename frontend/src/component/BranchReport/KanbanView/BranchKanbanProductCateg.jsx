import { Link } from "react-router-dom";

function BranchKanbanProductCateg(props) {
    return (<>
       <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">{props.branch.branchname}</h5>
    <Link to ={`/branch/productcatge/report?user_id=${props.branch.user_id}`}>
    
    <button type="button" class="btn btn-outline-danger">View Category Report</button>

    </Link>
    </div>
    <p class="mb-1">Latitude : {props.branch.latitude} </p>
    <p class="mb-1">Logitude : {props.branch.longitude}</p> 
  </a>
  
</div>
<br></br>
    </>  );
}

export default BranchKanbanProductCateg;