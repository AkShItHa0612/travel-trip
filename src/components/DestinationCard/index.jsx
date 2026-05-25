import {useNavigate} from 'react-router-dom'

import './index.css'

const DestinationCard=(props)=>{

const {item}=props

const navigate=useNavigate()

const viewDetails=()=>{

navigate(
`/details/${item.id}`
)

}

return(

<div className="card">

<div className="image-container">

<img
src={item.image}
alt={item.name}
/>

</div>

<div className="card-body">

<h2>
{item.name}
</h2>

<p>
{item.description}
</p>

<h3>
₹{item.price}
</h3>

<button
className="details-btn"
onClick={viewDetails}
>

View Details

</button>

</div>

</div>

)

}

export default DestinationCard