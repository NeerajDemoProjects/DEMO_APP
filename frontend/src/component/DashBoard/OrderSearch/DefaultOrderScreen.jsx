import { Paper } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";
import KanabanOrderCard from "./KanbanCard";
import OrderSearch from "./OrderSearch";
import Stages from "./Stage";

function DefaultOrderScreen() {
    const [order_list ,setOrderList]= useState([])
    const [is_loading,setIsloading]=useState(false)

    const updateOrderList=(state)=>{


        setOrderList(state)

    }


    
    useEffect(() => {

        
        axios.get("http://192.46.214.237:8000/api/order")
        .then(response => {
            setOrderList(response.data)
            setIsloading(true)

        })
    }, []);
    console.log(order_list)
    return (  <>


 








<Paper elevation={3} >
    
    
    <div className="container">
<br></br>
    <OrderSearch updateOrderList={updateOrderList}></OrderSearch>
    <br></br>
</div>
</Paper>








            {is_loading?<div className="cotainer">
        <br></br>
        <div className="row">
            {order_list.states.map((state)=>(
        <div className="col"><Stages name={state}></Stages>
        
        <div className="container">
            
        </div>
        <br></br>
        <div className="container">


            
      
               {order_list[state.toString()]['card'].map((order)=>(

<KanabanOrderCard order={order}  updateOrderList={updateOrderList} state={order_list[state.toString()].name}></KanabanOrderCard>
               )


               )}
        
        </div>    
        </div>


            ))}
             </div>
    

    </div>:<Loading></Loading>}




    </>);
}

export default DefaultOrderScreen;