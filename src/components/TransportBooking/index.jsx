import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import './index.css'

const TransportBooking=()=>{

const navigate=useNavigate()

const [from,setFrom]=useState('')

const [to,setTo]=useState('')

const [showCards,setShowCards]=
useState(false)

const [travelAssistance,
setTravelAssistance]=
useState(false)

const transportOptions=[

{
id:1,
type:'Bus',
icon:'🚌',
price:800,
duration:'10 hrs'
},

{
id:2,
type:'Train',
icon:'🚆',
price:1200,
duration:'8 hrs'
},

{
id:3,
type:'Flight',
icon:'✈️',
price:4500,
duration:'2 hrs'
}

]

const searchTransport=()=>{

if(

from.trim()!=='' &&

to.trim()!==''

){

setShowCards(true)

}

}

const bookTransport=(item)=>{

localStorage.setItem(

"transportBooking",

JSON.stringify({

from,
to,

type:item.type,

amount:item.price,

duration:item.duration,

travelAssistance

})

)

navigate('/success')

}

return(

<div className="transport-page">

<h1>

Travel Transport

</h1>

<div className="route-card">

<input
placeholder="From city"
value={from}
onChange={(e)=>
setFrom(
e.target.value
)
}
/>

<input
placeholder="To city"
value={to}
onChange={(e)=>
setTo(
e.target.value
)
}
/>

<div className="assistance-box">

<label>

Need Travel Assistance?

</label>

<input
type="checkbox"
checked={travelAssistance}
onChange={(e)=>

setTravelAssistance(

e.target.checked

)

}
className="assist-check"
/>

</div>

<button
onClick={searchTransport}
>

Search

</button>

</div>

{

showCards && (

<div className="transport-grid">

{

transportOptions.map(

each=>(

<div
key={each.id}
className="transport-card"
>

<h2>

{each.icon}

{' '}

{each.type}

</h2>

<p>

{from}

→

{to}

</p>

<p>

⏱️
{' '}
{each.duration}

</p>

<h3>

₹{each.price}

</h3>

{

travelAssistance && (

<div
className="assist-box"
>

✔ Pickup <br/>

✔ Guide <br/>

✔ Emergency Help <br/>

✔ Language Support

</div>

)

}

<button
onClick={()=>
bookTransport(each)
}
>

Book

</button>

</div>

)

)

}

</div>

)

}

</div>

)

}

export default TransportBooking