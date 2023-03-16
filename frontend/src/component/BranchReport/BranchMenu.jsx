import { Link } from "react-router-dom";

function BranchMenu() {
    return ( <>
    
    <li class="nav-item">
            <Link class="nav-link" to="/branch/order">Order</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/branch/Product">Product</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/branch/productcateg">Product Category</Link>
          </li>
        
        
    </> );
}

export default BranchMenu;