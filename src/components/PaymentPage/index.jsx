import {useNavigate} from 'react-router-dom'

import './index.css'

const PaymentPage = () => {

const navigate = useNavigate()

const tripData =
JSON.parse(
localStorage.getItem(
'bookingData'
)
)

const transportData =
JSON.parse(
localStorage.getItem(
'transportBooking'
)
)

const booking =
tripData || transportData || {}

const amount =
booking.amount ||
booking.price ||
0

const paymentSuccess=()=>{

localStorage.removeItem(
'bookingData'
)

localStorage.removeItem(
'transportBooking'
)

navigate('/success')

}

return(

<div className="payment-page">

<div className="payment-card">

<h1>
Payment
</h1>

<h2>

Total Amount: ₹{amount}

</h2>

{

transportData ? (

<div
className="booking-info"
>

<p>

<b>
Route:
</b>

{' '}
{booking.from}

{' → '}

{booking.to}

</p>

<p>

<b>
Transport:
</b>

{' '}

{booking.type}

</p>

<p>

<b>
Duration:
</b>

{' '}

{booking.duration}

</p>

{

booking.travelAssistance && (

<p>

<b>
Travel Assistance:
</b>

{' '}
Yes ✔

</p>

)

}

</div>

)

:

(

<div
className="booking-info"
>

<p>

<b>
Package:
</b>

{' '}

{booking.name}

</p>

<p>

<b>
Price:
</b>

{' '}

₹{booking.price}

</p>

</div>

)

}

<input
placeholder="Card Number"
/>

<input
placeholder="Card Holder Name"
/>

<input
placeholder="CVV"
/>

<button
onClick={paymentSuccess}
>

Pay ₹{amount}

</button>

</div>

</div>

)

}

export default PaymentPage