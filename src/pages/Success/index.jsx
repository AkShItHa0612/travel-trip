import {useNavigate} from 'react-router-dom'

import './index.css'

const SuccessPage=()=>{

const navigate=useNavigate()

const booking=
JSON.parse(
localStorage.getItem(
"bookingData"
)
)
||
JSON.parse(
localStorage.getItem(
"transportBooking"
)
)

return(

<div className="success-page">

<div className="success-card">

<div className="success-icon">

✅

</div>

<h1>

Booking Confirmed

</h1>

<p>

Your journey has been booked successfully

</p>

<div className="booking-details">

{

booking?.from ? (

<>

<p>
<b>Route:</b>
{booking.from}
{" → "}
{booking.to}
</p>

<p>
<b>Transport:</b>
{booking.type}
</p>

<p>
<b>Amount:</b>
₹{booking.amount}
</p>

</>

)

:

(

<>

<p>
<b>Destination:</b>
{booking?.name}
</p>

<p>
<b>Amount:</b>
₹{booking?.price}
</p>

</>

)

}

</div>

<div className="success-buttons">

<button
onClick={()=>{
navigate('/')
}}
>

Continue Browsing

</button>

<button
onClick={()=>{
navigate('/booking')
}}
>

Book New Trip

</button>

</div>

</div>

</div>

)

}

export default SuccessPage