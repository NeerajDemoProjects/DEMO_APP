import { Link } from "react-router-dom";

function BranchKanbanOrder(props) {
    return (<>
    <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{props.branch.branchname}</h5>
      <small class="text-muted">


<Link to={`/branch/order/report?user_id=${props.branch.user_id}`}>
      <button type="button" class="btn btn-outline-danger">View Orders</button>
</Link>


      </small>
    </div>
    <p class="mb-1">Latitude : {props.branch.latitude}</p>
    <p class="mb-1">Logitude : {props.branch.longitude}</p>

  </a>
  
</div>
<br></br>
    </>  );
}

export default BranchKanbanOrder;