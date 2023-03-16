import { Avatar } from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
function BranchKanban(props) {
  console.log(props)
    return ( <>


<div class="list-group">

  <a  class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1"><Avatar><StoreIcon></StoreIcon></Avatar></h5>

      <h5 class="mb-1">{props.name}</h5>
    </div>
    <hr></hr>
    <small class="text-muted">Latitude : {props.latitude}</small>
    <br></br>
    <small class="text-muted">Longitude : {props.longitude}</small>
    <br></br>
    <small class="text-muted">User.</small>
  </a>
</div>
<br></br>
    </> );
}

export default BranchKanban;