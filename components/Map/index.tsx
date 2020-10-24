import { useState, useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LatLngExpression } from 'leaflet'
import Leaflet from 'leaflet'
import styled from 'styled-components'
import Link from 'next/link'
import { CallToAction } from '../../pages'

const location = [-25.4022131, -49.2740054] as LatLngExpression

const mapBoxAPIToken =
    'pk.eyJ1IjoiZGVzaWduZmlzY2hlciIsImEiOiJja2RldnlqMmwwYXUyMzBwZnlrYmhwYjA5In0.qYk2QofNKKecizVF99V8ew'
const tileLayerUrl = `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${mapBoxAPIToken}`
const mapIcon = Leaflet.icon({
    iconUrl: '/assets/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [175, 2],
})

const LeafletMap = () => {
    const [displayMap, setDisplayMap] = useState(false)

    useEffect(() => {
        handleDisplayMap()
    }, [handleDisplayMap])

    function handleDisplayMap() {
        setTimeout(setDisplayMap, 1000, true)
    }

    if (displayMap === false)
        return (
            <LoadingMap>
                <h1>Carregando mapa...</h1>
            </LoadingMap>
        )

    return (
        <Map
            center={location}
            zoom={15}
            style={{ width: '100%', height: '100%' }}
        >
            <TileLayer url={tileLayerUrl} />
            <Marker position={location} icon={mapIcon}>
                <PopUpStyle closeButton={false} minWidth={240} maxWidth={240}>
                    Lar das Meninas
                    <Link href="/orphanage/template">
                        <NavigateToOrphanage>
                            <FiPlus size={18} />
                        </NavigateToOrphanage>
                    </Link>
                </PopUpStyle>
            </Marker>
        </Map>
    )
}

export default LeafletMap

const LoadingMap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const PopUpStyle = styled(Popup)`
    .leaflet-popup-content-wrapper {
        background: #ffffff;
        height: 58px;
        border-radius: 10px;
    }

    .leaflet-popup-content {
        height: 30px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        color: #333;
        font-weight: bold;
    }

    .leaflet-popup-tip {
        display: none;
    }
`

const NavigateToOrphanage = styled(CallToAction)`
    width: 50px;
    height: 50px;
    margin-right: -16px;
`
