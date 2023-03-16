function Stages(props) {
    return ( <>

<div class="list-group">

  <a  class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{props.name}</h5>
     
    </div>
    
  </a>
 
</div>
    </> );
}

export default Stages;