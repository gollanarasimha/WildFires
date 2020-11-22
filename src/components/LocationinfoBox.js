
const LocationinfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event location info</h2>
            <ul>
                <li>
                   Nasa ID: <strong>{info.id}</strong>
                </li>
                <li>
                    Location: <strong>{info.title}</strong>
                </li>
            </ul>
        </div>
    )
}

export default LocationinfoBox
