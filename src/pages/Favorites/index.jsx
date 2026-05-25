import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'

import TravelContext from '../../context/TravelContext'

import './index.css'

const Favorites = () => {
  const {favorites} = useContext(
    TravelContext
  )

  const navigate = useNavigate()

  return (
    <div className="favorites-page">

      <h1 className="favorite-heading">
        ❤️ Saved Destinations
      </h1>

      <p className="favorite-subtext">
        Your saved trips for later
      </p>

      <div className="favorites-container">

        {favorites.map(each => (

          <div
            key={each.id}
            className="favorite-card"
          >

            <img
              src={each.image}
              alt={each.name}
            />

            <div className="favorite-content">

              <h2>
                {each.name}
              </h2>

              <p>
                {each.description}
              </p>

              <h3>
                ₹{each.price}
              </h3>

              <button
                onClick={()=>
                  navigate(
                    `/details/${each.id}`
                  )
                }
              >
                View Trip
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Favorites