import { width } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MammapizzaNotification  from '../Notification/sound/Notification.mpeg'

function Notification() {
  
    const audioPlayer = useRef(null);
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState();
    const [id,setUserId]=useState()
    
    

  const playAudio=() => {
    audioPlayer.current.play();
  
  }                


    const notify = () => toast("You have an order");



  
    useEffect(() => {

      console.log(window)
      // create a new WebSocket instance
      const newSocket = new WebSocket('ws://192.46.214.237:5000');
  
      // set the WebSocket instance to state
      setSocket(newSocket);

      // handle incoming messages
      newSocket.onmessage = event => {
        var is_user_notification = false
        axios.get('http://192.46.214.237:8000/api/get/users')
      .then(response => {
      

        if (event.data == response.data["id"]){
         
          notify()     
          playAudio()
          audioPlayer()

  


        
        }
 


      })



  const timeoutId = setTimeout(() => {
    window.location.reload();
  }, 5000);

   
  
 
     
      };


      console.log(newSocket)
  
      return () => {
        newSocket.close();
      };
    }, []);

    return ( <>
     <div>
     
        <ToastContainer />
        <button onClick={playAudio}   style={{display:"none"}}></button>
        <audio ref={audioPlayer} src={MammapizzaNotification} />
      </div>
    </> );
}

export default Notification;