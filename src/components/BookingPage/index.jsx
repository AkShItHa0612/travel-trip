import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import './index.css'

const BookingPage=()=>{

const navigate=useNavigate()

const basePrice=5000

const [tripType,setTripType]=useState(
'oneway'
)

const [travelers,setTravelers]=useState(1)

const [name,setName]=useState('')

const calculateTotal=()=>{

let total=
basePrice*travelers

if(
tripType==='roundtrip'
){
total=total*2
}

return total
}

const submitForm=e=>{

e.preventDefault()

navigate(
'/payment',
{
state:{
name,
travelers,
tripType,
amount:
calculateTotal()
}
}
)
}

return(

<div className="booking-page">

<div className="booking-overlay">

<form
className="booking-card"
onSubmit={submitForm}
>

<h1>
Book Your Trip
</h1>

<p>
Complete your details
</p>

<input
placeholder="Full Name"
value={name}
onChange={e=>
setName(
e.target.value
)
}
required
/>

<input
placeholder="Email"
required
/>

<input
placeholder="Phone"
required
/>

<select
value={tripType}
onChange={e=>
setTripType(
e.target.value
)
}
>

<option value="oneway">

One Way

</option>

<option value="roundtrip">

Round Trip

</option>

</select>

<input
type="number"
value={travelers}
onChange={e=>
setTravelers(
e.target.value
)
}
/>

<div className="price-box">

<h2>
Total:
₹{calculateTotal()}
</h2>

</div>

<button type="submit">

Proceed To Payment

</button>

</form>

</div>

</div>

)

}

export default BookingPage