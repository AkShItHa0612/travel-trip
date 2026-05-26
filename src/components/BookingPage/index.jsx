import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import './index.css'

const BookingPage=()=>{

const navigate=useNavigate()

const tripData=
JSON.parse(
localStorage.getItem(
'bookingData'
)
)

const [name,setName]=useState('')
const [tripType,setTripType]=useState('One Way')

const [adults,setAdults]=useState(1)

const [children,setChildren]=useState(0)

const basePrice=
tripData?.price || 0

const totalAmount=

(basePrice*adults)+
((basePrice/2)*children)+
(tripType==='Round Trip'
?basePrice:0)

const proceedPayment=()=>{

const bookingDetails={

...tripData,

customerName:name,
adults,
children,
tripType,
amount:totalAmount

}

localStorage.setItem(
'bookingData',
JSON.stringify(
bookingDetails
)
)

navigate('/payment')

}

return(

<div className="booking-page">

<div className="booking-card">

<h1>

Book Your Trip

</h1>

<h2>

{tripData?.name}

</h2>

<h3>

Base Price:

₹{basePrice}

</h3>

<input

placeholder="Full Name"

value={name}

onChange={(e)=>
setName(
e.target.value
)
}

/>

<select

value={tripType}

onChange={(e)=>
setTripType(
e.target.value
)
}

>

<option>

One Way

</option>

<option>

Round Trip

</option>

</select>

<label>

Adults

</label>

<input

type="number"

min="1"

value={adults}

onChange={(e)=>
setAdults(
Number(
e.target.value
)
)
}

/>

<label>

Children

</label>

<input

type="number"

min="0"

value={children}

onChange={(e)=>
setChildren(
Number(
e.target.value
)
)
}

/>

<h2>

Total:

₹{totalAmount}

</h2>

<button

onClick={
proceedPayment
}

>

Proceed To Payment

</button>

</div>

</div>

)

}

export default BookingPage