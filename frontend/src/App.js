import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import OrderScreen from './component/DashBoard/OrderScreen';
import ProductScreen from './component/DashBoard/ProductScreen';
import ProductCategScreen from './component/DashBoard/ProductCateg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductReport from './component/Report/Product';
import ProductCategoryReport from './component/Report/ProductCategory';
import Branch from './component/Settings/Branch';
import UserView from './component/Settings/UserView';
import BranchView from './component/Settings/Branch';
import BranchOrder from './component/BranchReport/BranchOrder';
import BranchProduct from './component/BranchReport/BranchProduct';
import BranchProductCateg from './component/BranchReport/BranchProductCateg';
import BranchProductReport from './component/BranchReport/BranchReport/Product';
import BranchKanbanProductCateg from './component/BranchReport/KanbanView/BranchKanbanProductCateg';
import BranchReportProductCateg from './component/BranchReport/BranchReport/ProductCateg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BoardOfOrder from './component/BranchReport/BranchReport/Order';
import LoginForm from './component/Login/Login';
import Notification from './Notification/notification';


function App() {

  const [user,setUser]=useState([])
  const [is_login,setLogin]=useState(false)

  useEffect(() => {

    axios.defaults.headers.common['Authorization'] = "JWT "+localStorage.getItem('access');

    axios.get('http://loadmincalhost:8000/api/get/users')
    .then(response => {
        setUser(response.data)
        console.log(response.data)
        setLogin(true)
    })},[])

    console.log(user)
  return (
<>
<Notification id={user['id']}></Notification>
{is_login?<BrowserRouter>
<Navbar user={user}></Navbar>
      <Routes>
      <Route path="/" element={<OrderScreen></OrderScreen>} />
      <Route path="/dashboard" element={<OrderScreen></OrderScreen>} />


        <Route path="/dashboard/order" element={<OrderScreen></OrderScreen>} />
        <Route path="/dashboard/order/filter"  element={<OrderScreen></OrderScreen>} />
          <Route path="/dashboard/Product" element={<ProductScreen />} />

          <Route path="/dashboard/ProductCatgory" element={<ProductCategScreen />} />



          <Route path="/Report" element={<ProductReport />} />

          <Route path="/Report/Product" element={<ProductReport />} />
          <Route path="/Report/ProductCatgory" element={<ProductCategoryReport />} />
          {user.is_superuser?<Route path="/settings" element={<UserView/>} />:""}
          {user.is_superuser?<Route path="/settings" element={<UserView/>} />:""}
          
          {user.is_superuser?<Route path="/settings/user" element={<UserView />} />:""}
          {user.is_superuser?<Route path="/settings/branch" element={<BranchView />} />:""}

          {user.is_superuser?<Route path="/branch" element={<BranchOrder />} />:""}

          {user.is_superuser?<Route path="/branch/order" element={<BranchOrder />} />:""}
          {user.is_superuser?<Route path="/branch/product" element={<BranchProduct />} />:""}
          {user.is_superuser?<Route path="/branch/productcateg" element={<BranchProductCateg />}></Route>:""}
          {user.is_superuser?<Route path="/branch/product/report/*" element={<BranchProductReport />} />:""}
          {user.is_superuser?<Route path="/branch/productcatge/report/*" element={<BranchReportProductCateg />} />:""}

          {user.is_superuser?<Route path="/branch/order/report/*" element={<BoardOfOrder />} />:""}




      </Routes>
    </BrowserRouter>:<LoginForm></LoginForm>}













  </>

  );
}

export default App;
