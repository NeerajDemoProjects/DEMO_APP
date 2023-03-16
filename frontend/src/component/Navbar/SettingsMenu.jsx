import { Link } from "react-router-dom";

function SettingsMenu() {

    return ( <>
          <li class="nav-item">
            <Link class="nav-link" to="/settings/user">User</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/settings/branch">Branch</Link>
          </li>
        
        
        </>
        
        
        
        );
}

export default SettingsMenu;