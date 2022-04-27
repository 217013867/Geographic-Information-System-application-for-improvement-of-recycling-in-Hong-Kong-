import {useEffect, useRef, useState} from "react";
import style from './map.module.css'

export default function MapComponent({setMap, setCurrentLocation}) {

    const ref = useRef();
    const center = {
        lat: 22.302711,
        lng: 114.177216,
    };

    const handleLocationError = () => setCurrentLocation(null)

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
