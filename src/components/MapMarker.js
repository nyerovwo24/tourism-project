import React from 'react'
import  { FaMapMarkerAlt } from 'react-icons/fa'

function MapMarker() {
    return (
        <span>
          <FaMapMarkerAlt className="map-marker-alt" size={13} background='white' />
        </span>
    )
}

export default MapMarker
