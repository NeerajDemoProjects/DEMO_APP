import { Link } from "react-router-dom";

function ReportMenu() {
    return (  <>

<li class="nav-item">
            <Link class="nav-link" to="/Report/Product">Product</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Report/ProductCatgory">Product Category</Link>
          </li>
        
        
    </>);
}

export default ReportMenu;