import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationinfoBox from './LocationinfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationinfo, setLocationInfo] = useState(null)

    const markers= eventData.map( ev => {
        if(ev.categories[0].id === 8){
           return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id:ev.id, title: ev.title})}/>
        }
        return null
    })
    return (
        <div className="googlemap">
            <GoogleMapReact
                bootstrapURLKeys= {{ key: 'AIzaSyD9QiM4I1sMus1xhXP8G6xtPLsV2r2TM44' }}
                defaultCenter= { center }
                defaultZoom= { zoom }
            >
                { markers }
            </GoogleMapReact>
            {locationinfo && <LocationinfoBox info={locationinfo} /> }
        </div>
    )
}

Map.defaultProps={
    center:{
        lat: 49.2827,
        lng: - 123.1207
    },
    zoom: 7
}
export default Map
