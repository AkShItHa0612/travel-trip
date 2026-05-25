import DestinationCard from '../DestinationCard'

import './index.css'

const DestinationList = props => {
  const {data} = props

  return (
    <div className="destination-container">

      {data.map(each => (
        <DestinationCard
          key={each.id}
          item={each}
        />
      ))}

    </div>
  )
}

export default DestinationList