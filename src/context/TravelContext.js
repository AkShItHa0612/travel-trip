import {createContext,useState} from 'react'

const TravelContext=createContext()

export const TravelProvider=({children})=>{

const [favorites,setFavorites]=useState([])

const addFavorite=(trip)=>{

const alreadyExists=
favorites.find(
item=>item.id===trip.id
)

if(!alreadyExists){

setFavorites([
...favorites,
trip
])

}

}

const removeFavorite=(id)=>{

const updatedFavorites=
favorites.filter(
item=>item.id!==id
)

setFavorites(updatedFavorites)

}

return(

<TravelContext.Provider
value={{
favorites,
addFavorite,
removeFavorite
}}
>

{children}

</TravelContext.Provider>

)

}

export default TravelContext