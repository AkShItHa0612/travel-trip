import {useNavigate} from 'react-router-dom'

import './index.css'

const SuccessPage=()=>{

const navigate=useNavigate()

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

Your journey has been booked successfully 🎉

</p>

<div className="success-buttons">

<button
onClick={()=>
navigate('/')
}
>

Continue Browsing

</button>

<button
onClick={()=>
navigate('/booking')
}
>

Book New Trip

</button>

</div>

</div>

</div>

)

}

export default SuccessPage