import {useState} from 'react'

import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import FilterSection from '../../components/FilterSection'
import DestinationList from '../../components/DestinationList'

import travelData from '../../data/travelData'

const Home = () => {

const [filter,setFilter]=useState(
'All'
)

const filteredData=
filter==='All'
?travelData
:travelData.filter(
each=>each.category===filter
)

const changeFilter=value=>{
setFilter(value)
}

return(

<>

<Navbar/>

<HeroSection/>

<FilterSection
changeFilter={changeFilter}
/>

<DestinationList
data={filteredData}
/>

</>

)

}

export default Home