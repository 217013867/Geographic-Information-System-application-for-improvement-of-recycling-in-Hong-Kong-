import {useEffect, useRef, useState} from "react";
import style from './map.module.css'

/**
 * For rendering frontend component - Map
 * @param {Object} map 
 * @returns {JSX.Element}
 */
export default function MapComponent({setMap, setCurrentLocation}) {

    const ref = useRef();
    /**
     * Center of the map
     */
    const center = {
        lat: 22.302711,
        lng: 114.177216,
    };

    const handleLocationError = () => setCurrentLocation(null)

    /**
     * set center, zoom Level
     */
    useEffect(() => {
        const map = new window.google.maps.Map(ref.current, {
            center,
            zoom: 11,
            streetViewControl: false,
        })
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    })
                },
                () => handleLocationError()
            );
        } else
            handleLocationError();

        setMap(map);
    }, []);

    return <div ref={ref} id="map" className={style.map}/>;
}
