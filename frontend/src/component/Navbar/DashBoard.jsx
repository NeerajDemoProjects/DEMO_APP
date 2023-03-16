import { Link } from "react-router-dom";

function DashBoardMenus() {
    return ( <>
    <li class="nav-item">
            <Link class="nav-link" to="/dashboard/order">Order</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/dashboard/Product">Product</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/dashboard/ProductCatgory">Product Category</Link>
          </li>
        
        
        </>

 );
}

export default DashBoardMenus;