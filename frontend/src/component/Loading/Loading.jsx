import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
function Loading() {
    return (
<div>

<button class="btn btn-danger" type="button" style={{'width':'100%','height':'500%'}} disabled>
<OutdoorGrillIcon></OutdoorGrillIcon>
    <br></br>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>



</div>



    );
}

export default Loading;