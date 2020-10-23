import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LatLngExpression } from 'leaflet'

const location = [-25.4022131, -49.2740054] as LatLngExpression
const mapBoxAPIToken = 'pk.eyJ1IjoiZGVzaWduZmlzY2hlciIsImEiOiJja2RldnlqMmwwYXUyMzBwZnlrYmhwYjA5In0.qYk2QofNKKecizVF99V8ew'
const tileLayerUrl = `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${mapBoxAPIToken}`

const LeafletMap = () => {    
    return (
        <Map
            center={location}
            zoom={15}
            style={{ width: '100%', height: '100%' }}
        >
            <TileLayer url={tileLayerUrl} />
        </Map>
    )
}

export default LeafletMap
