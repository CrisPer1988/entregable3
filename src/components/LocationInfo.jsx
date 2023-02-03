import React from 'react'
import './styles/locationInfo.css'
const LocationInfo = ({location}) => {

  return (
    <article className='location__info-container'>
        <h2 className='location__tittle'>{location?.name}</h2>
        <ul className='location__ul'>
            <li className='location__li'><span className='location__list'>Type: </span>{location?.type}</li>
            <li className='location__li'><span className='location__list'>Dimension: </span>{location?.dimension}</li>
            <li className='location__li'><span className='location__list'>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo