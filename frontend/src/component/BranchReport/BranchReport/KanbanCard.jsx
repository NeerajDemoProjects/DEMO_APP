import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
function KanabanOrderCardBranch(props) {
const location =useLocation()
  const branch_url ="http://192.46.214.237:8000"+ location.pathname+location.search

  const handStartPrepairing =()=>{
axios.put('http://192.46.214.237:8000/api/update/order',
{
  'id': props.order.id,
  'state':'Preparing'

})

window.location.reload()
}


  const handHold =()=>{
    axios.put('http://192.46.214.237:8000/api/update/order',
    {
      'id': props.order.id,
      'state':'New'
    
    }
    
    )


    window.location.reload()


      }

const handleCompleted =()=>{
        axios.put('http://192.46.214.237:8000/api/update/order',
        {
          'id': props.order.id,
          'state':'Completed'
        
        }
        
        )
        window.location.reload()

          }


    return (  <>
    
    <div class="list-group">
  <a class="list-group-item list-group-item-action flex-column align-items-start text-black">
    <div class="d-flex w-100 justify-content-between">
      <h2 class="mb-1">{props.order.name}</h2>

      <small>{props.order.create_time_string}
      <br></br>
      <br></br>
      
  
      {props.state==='New'? <button type="button" class="btn btn-outline-danger" onClick={()=>{handStartPrepairing()}}>Start Prepairing</button>:""}

      {props.state==='Preparing'? <button type="button" class="btn btn-outline-danger" onClick={()=>{handHold()}}>Hold</button>:""}
      {props.state==='Preparing'? <button type="button" class="btn btn-outline-danger" onClick={()=>{handleCompleted()}}>Complete</button>:""}



      </small>


    </div>
    <p class="mb-1">
        
    <div class="bd-example">
  
  <address>
  {props.order.first_name} {props.order.last_name}
  <br></br>
{props.order.address1}
<br></br>
{props.order.address2}
<br></br>
{props.order.city}
<br></br>
{props.order.province}
<br></br>
{props.order.phone}

{/* <br><strong>{props.order.first_name}{props.order.last_name}</stron g></br> */}

  </address>
</div>
        
        </p>
  </a>
  {props.order.note?<a  class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Customer Note</h5>
    </div>
    <p class="mb-1">{props.order.note}</p>
  </a>:""}
 
  {props.order.order_line_id?<a  class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Order</h5>
    </div>
    <p class="mb-1">
        {props.order.order_line_id.map((order_line)=>(

<a class="list-group-item list-group-item-action flex-column align-items-start">
<div class="d-flex w-100 justify-content-between">
  <h5 class="mb-1">{order_line.product_name}</h5>
  <small class="text-muted">Qty : {order_line.qty}</small>
</div>
<p class="mb-1">


<div contentEditable='true' dangerouslySetInnerHTML={{ __html: order_line.customization }}></div>


</p>
</a>






        ))}

   


        
    </p>
  </a>:""}









  
</div>
<br></br>



    </>);
}

export default KanabanOrderCardBranch;