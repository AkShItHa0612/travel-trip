import {useParams,useNavigate} from 'react-router-dom'
import {useContext} from 'react'

import TravelContext from '../../context/TravelContext'
import travelData from '../../data/travelData'

import './index.css'

const TravelDetails=()=>{

const {id}=useParams()

const navigate=useNavigate()

const {addFavorite}=useContext(
TravelContext
)

const selected=
travelData.find(
each=>each.id===Number(id)
)

const saveLater=()=>{

addFavorite(selected)

alert(
'Added to Favorites ❤️'
)

}

const bookTrip=()=>{

localStorage.setItem(

"bookingData",

JSON.stringify(selected)

)

navigate('/success')

}

return(

<div className="details-page">

<div className="hero-section-details">

<img
src={selected.image}
alt={selected.name}
/>

<div className="overlay-details">

<h1>
{selected.name}
</h1>

<p>
{selected.description}
</p>

<h2>
₹{selected.price}
</h2>

<div className="button-container">

<button
className="save-btn"
onClick={saveLater}
>

❤️ Save For Later

</button>

<button
className="book-btn"
onClick={bookTrip}
>

Book Now

</button>

</div>

</div>

</div>

<div className="details-content">

<div className="info-card">

<h2>
Nearby Hotels
</h2>

<ul>

<li>
Luxury Resort ⭐⭐⭐⭐⭐
</li>

<li>
Budget Stay ⭐⭐⭐
</li>

<li>
Premium Hotel ⭐⭐⭐⭐
</li>

</ul>

</div>

<div className="info-card">

<h2>
Transport
</h2>

<ul>

<li>
✈ Flight
</li>

<li>
🚆 Train
</li>

<li>
🚌 Bus
</li>

</ul>

</div>

</div>

</div>

)

}

export default TravelDetails