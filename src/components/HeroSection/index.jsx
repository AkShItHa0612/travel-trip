import {useNavigate} from 'react-router-dom'

import './index.css'

const HeroSection=()=>{

const navigate=useNavigate()

return(

<div className="hero-container">

<div className="hero-overlay">

<h1>

Explore Your Dream Destination

</h1>

<p>

Discover amazing places, luxury stays and unforgettable experiences

</p>

<div className="hero-buttons">

<button
className="explore-btn"
onClick={()=>navigate('/')}
>

Explore Now

</button>

<button
className="saved-btn"
onClick={()=>navigate('/favorites')}
>

Saved Trips ❤️

</button>

</div>

<div className="stats-container">

<div className="stat-card">

<h2>50+</h2>

<p>Destinations</p>

</div>

<div className="stat-card">

<h2>200+</h2>

<p>Hotels</p>

</div>

<div className="stat-card">

<h2>5k+</h2>

<p>Travelers</p>

</div>

</div>

</div>

</div>

)

}

export default HeroSection