import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { useLocation } from "react-router-dom";

import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';


function ProductKanban(props) {

    return ( <>

<>

   <div class="list-group">

<a  class="list-group-item list-group-item-action">
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1"><Avatar>
      <FastfoodTwoToneIcon></FastfoodTwoToneIcon></Avatar> </h5>
    <h5 class="mb-1">{props.name}</h5>

  </div>

</a>
</div> </>






      
</> );
}

export default ProductKanban;