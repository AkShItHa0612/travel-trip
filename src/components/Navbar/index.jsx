import {Link,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Navbar=()=>{

const navigate=useNavigate()

const logout=()=>{

Cookies.remove('jwt_token')
navigate('/login')
}

return(

<nav className="navbar">

<div className="logo-container">

<h1 className="logo">

✈ TravelTrip

</h1>

<p className="tagline">

Explore Beyond Limits

</p>

</div>

<ul className="nav-links">

<li>

<Link
to="/"
className="nav-item"
>

🏠 Home

</Link>

</li>
<li><Link
to="/transport"
className="nav-item"
>
🚍 Transport
</Link></li>
<li>

<Link
to="/favorites"
className="nav-item"
>

❤️ Saved Trips

</Link>

</li>

<li>

<button
className="logout-btn"
onClick={logout}
>

Logout

</button>

</li>

</ul>

</nav>

)

}

export default Navbar