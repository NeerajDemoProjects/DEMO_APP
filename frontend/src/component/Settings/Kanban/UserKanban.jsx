import { Avatar } from "@mui/material";

function UserKanban(props) {
    return (  <>
   <div class="list-group">

<a  class="list-group-item list-group-item-action">
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1"><Avatar></Avatar> </h5>
    <h5 class="mb-1">{props.name}</h5>

  </div>
  <hr></hr>
  <small class="text-muted">Email : {props.email}</small>
  <br></br>

</a>
</div> <br></br></>);
}

export default UserKanban;