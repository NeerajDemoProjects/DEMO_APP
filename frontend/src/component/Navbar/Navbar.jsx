
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {  Link, Route, Routes } from 'react-router-dom';
import BranchMenu from '../BranchReport/BranchMenu';
import DashBoardMenus from './DashBoard';
import ReportMenu from './ReprotMenu';
import SettingsMenu from './SettingsMenu';
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import Notification from '../../Notification/notification';
const handleLogout =(e)=>{
  localStorage.removeItem('access')
  window.location.reload(false);

}
function Navbar(props) {
    return (

        <>




<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
<div class="container-fluid">



      <button class="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      <Routes>
      <Route path="/" element={<>Dashboard</>} />      

      <Route path="/dashboard" element={<><DashboardIcon></DashboardIcon>Dashboard</>} />      
      <Route path="/dashboard/*" element={<><DashboardIcon></DashboardIcon>Dashboard</>} />    
      <Route path="/branch" element={<><EqualizerIcon></EqualizerIcon>Branch Analaysis</>} />      
      <Route path="/branch/*" element={<><EqualizerIcon></EqualizerIcon>Branch Analaysis</>} />    
      <Route path="/report/" element={<><AssessmentIcon></AssessmentIcon>Reporting</>} />    
      <Route path="/report/*" element={<><AssessmentIcon></AssessmentIcon>Reporting</>} />    
      <Route path="/settings" element={<><SettingsSuggestIcon></SettingsSuggestIcon>Settings</>} />    
      <Route path="/settings/*" element={<><SettingsSuggestIcon></SettingsSuggestIcon>Settings</>} />    

      </Routes>
 
            
      </button>















      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <Routes>
                <Route path='/dashboard/*' element={ <DashBoardMenus></DashBoardMenus>}/>    
                <Route path='/' element={ <DashBoardMenus></DashBoardMenus>}/>    
                <Route path='/Report' element={ <ReportMenu></ReportMenu>}/>    
                <Route path='/Report/*' element={ <ReportMenu></ReportMenu>}/>    
                <Route path='/settings/*' element={ <SettingsMenu></SettingsMenu>}/>    
                <Route path='/settings' element={ <SettingsMenu></SettingsMenu>}/>
                <Route path='/branch' element={ <BranchMenu></BranchMenu>}/>        
                <Route path='/branch/*' element={ <BranchMenu></BranchMenu>}/>    


                
                
  



</Routes>
        

        </ul>

      </div>
    </div>
  </nav>



  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">


    </h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>

  </div>
  <div class="offcanvas-body">
<div className="container">
<Avatar></Avatar> <br></br>
<h4>
{props.user.name}

</h4>
<br></br>
  </div>  





  <div class="list-group list-group-flush">
    
  <Link class="nav-link" to="/dashboard">  <button type="button" class="list-group-item list-group-item-action" data-bs-dismiss="offcanvas"><DashboardIcon></DashboardIcon> DashBoard</button>
  </Link>

    {props.user.is_superuser?  <Link class="nav-link" to="/branch">  <button type="button" class="list-group-item list-group-item-action" data-bs-dismiss="offcanvas"><EqualizerIcon></EqualizerIcon>Branch Analysis</button>
  </Link>:""  
  
  }

    <Link class="nav-link" to="/Report" >  <button type="button" data-bs-dismiss="offcanvas" class="list-group-item list-group-item-action"><AssessmentIcon></AssessmentIcon>Report</button></Link>
    
    {props.user.is_superuser?    <Link class="nav-link" to="/settings" >  <button type="button" data-bs-dismiss="offcanvas" class="list-group-item list-group-item-action"><SettingsSuggestIcon></SettingsSuggestIcon>Setting</button></Link>
:""}




<br></br>

<a class="nav-link" onClick={(e)=>{handleLogout(e)}} >

  <button type="button" data-bs-dismiss="offcanvas" class="list-group-item list-group-item-action " style={{border:"none"}}>
  <LogoutIcon></LogoutIcon> Logout</button>

</a>



</div>
<br></br>








  </div>
</div>


        </>
      );
}

export default Navbar;