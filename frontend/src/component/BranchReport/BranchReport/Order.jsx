import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import KanabanOrderCard from "../../DashBoard/OrderSearch/KanbanCard";
import Stages from "../../DashBoard/OrderSearch/Stage";
import OrderFiltersBranch from "../Filters/OrderFilterBranch";
import KanabanOrderCardBranch from "./KanbanCard";

function BoardOfOrder() {
    const location =useLocation()

    const branch_url ="http://192.46.214.237:8000"+ location.pathname+location.search
    const [product_list ,setBranchrList]= useState([])
    const [state,setState]=useState([])
    const [is_loading ,setLoading]= useState(false)
  
    const updateOrderList =(state)=>{
        setBranchrList(state)
        setState(state.states)

    }

    const handleFilter =(state)=>{

        setBranchrList(state)
        setState(state.states)

    }
    useEffect(() => {
  
    
        axios.get(branch_url)
        .then(response => {
            setBranchrList(response.data)
            setState(response.data.states)
        })
    }, []);
    console.log(product_list.states)
    return ( <>

<div className="container">
    <OrderFiltersBranch handleFilter={handleFilter}></OrderFiltersBranch>
</div>

<div className="cotainer">
        <br></br>
        <div className="row">
            {state.map((state)=>(
        <div className="col"><Stages name={state}></Stages>
        
        <div className="container">
            
        </div>
        <br></br>
        <div className="container">


            
      
               {product_list[state.toString()]['card'].map((order)=>(
                

<KanabanOrderCardBranch order={order}  updateOrderList={updateOrderList} state={product_list[state.toString()].name}></KanabanOrderCardBranch>
               )


               )}
        
        </div>    
        </div>


            ))}
             </div>
    

    </div>


    
    </> );
}

export default BoardOfOrder;