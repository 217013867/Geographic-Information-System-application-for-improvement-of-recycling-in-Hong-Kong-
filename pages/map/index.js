import {useEffect, useState} from 'react'
import {Status, Wrapper} from "@googlemaps/react-wrapper";
import MapComponent from "./map";

import data from '../../data/data.json'
import {Col, Row, Container, Button, Input, Label} from "reactstrap";


const Map = () => {
    const apiKey = 'AIzaSyBeNAOLY6vPddJiTZ1_b0n-TaUdrM-mfMg'

    const [map, setMap] = useState(null);
    const [selectedType, setSelectedType] = useState('')
    const [currentLocation, setCurrentLocation] = useState(null)
    const [currentLocationString, setCurrentLocationString] = useState('')
    const [markers, setMarkers] = useState([]);
    const [directionsRenderers, setDirectionsRenderers] = useState([])
    const [totalDistance, setTotalDistance] = useState(0)
    const [radius, setRadius] = useState(0)
    const [circles, setCircles] = useState([]);

    const iconBase = "/mapicon/";
    const s = [{
        name: 'BEVERAGE CARTONS', file: 'BEVERAGE.png'
    }, {
        name: 'FLUORESCENT LAMPS AND TUBES', file: 'fluorescent.png'
    }, {
        name: 'GLASS BOTTLES', file: 'GLASS.png'
    }, {
        name: 'METALS', file: 'beam.png'
    }, {
        name: 'PAPER', file: 'PPAPER.png'
    }, {
        name: 'PLASTICS', file: 'bag.png'
    }, {
        name: 'RECHARGEABLE BATTERIES', file: 'battery.png'
    }, {
        name: 'REGULATED ELECTRICAL EQUIPMENT', file: 'appliances.png'
    }, {
        name: 'SMALL ELECTRICAL APPLIANCES', file: 'microwave.png'
    }, {
        name: 'COMPUTER PRODUCTS', file: 'computer.png'
    }, {
        name: 'ELECTRICAL APPLIANCES', file: 'electricappliance.png'
    }, {
        name: 'OTHERS', file: 'others.png'
    }, {
        name: 'WASTE PLASTICS', file: 'plastic.png'
    }, {
        name: 'METAL CANS', file: 'metal.png'
    }, {
        name: 'METAL CONTAINER', file: 'CONTAINER.png'
    }, {
        name: 'PLASTIC BOTTLE', file: 'water.png'
    }, {
        name: 'WASTE PAPER', file: 'paper.png'
    }, {
        name: 'ACCESSORIES', file: 'accessory.png'
    }, {
        name: 'BOOKS', file: 'book.png'
    }, {
        name: 'CLOTHES', file: 'clothes.png'
    }, {
        name: 'EDUCATIONAL TOYS', file: 'cubes.png'
    }, {
        name: 'STATIONERY', file: 'stationery.png'
    }, {
        name: 'HOTEL SOAPS AND AMENITIES', file: 'toiletries.png'
    }, {
        name: 'SMALL WASTE ELECTRICAL AND ELECTRONIC EQUIPMENT', file: 'motor.png'
    }, {
        name: 'FOOD', file: 'hamburger.png'
    }, {
        name: 'FURNITURE (HOUSEHOLD)', file: 'couch.png'
    }, {
        name: 'FURNITURE (INSTITUTION/COMMERCIAL)', file: 'desk.png'
    },{
        name: 'Waste Separation Bin', file: 'bin.png'
    }]

    useEffect(() => {
        (async () => {
            handleFlag(selectedType)
        })()
    }, [selectedType])

    useEffect(() => {
        (async () => {
            handleDirectionService(selectedType)
        })()
    }, [selectedType, currentLocationString])



    const render = (status) => {
        if (status === Status.LOADING) return <h3>{status} ..</h3>;
        if (status === Status.FAILURE) return <h3>{status} ...</h3>;
        if (status === Status.SUCCESS) return <MapComponent setMap={setMap} setCurrentLocation={setCurrentLocation}/>;
    };

    const generateSelect = () => s.map(i => <option key={i.name} value={i.name}>{i.name}</option>)

    const handleDirectionService = async () => {
        markers.map(async m => {
            google.maps.event.clearListeners(m, 'click');
            m.addListener('click', async () => {
                const directionsService = new google.maps.DirectionsService();
                const directionsRenderer = new google.maps.DirectionsRenderer();
                console.log(directionsRenderer)
                // create Direction Service Object
                const directServiceObject = {
                    origin: currentLocation ? new google.maps.LatLng(currentLocation?.lat, currentLocation?.lng) : currentLocationString
                    , destination: m.position, travelMode: 'WALKING'
                }
                console.log(currentLocation, currentLocationString, directServiceObject)
                directionsService.route(directServiceObject, (result, status) => {
                    if (status === 'OK') {
                        directionsRenderer.setDirections(result);
                        const totalDistance = computeTotalDistance(directionsRenderer.getDirections());
                        setTotalDistance(totalDistance)
                        setDirectionsRenderers(directionsRenderers => [...directionsRenderers, {
                            directionsRenderer, totalDistance
                        }])
                    }
                })
                directionsRenderer.setMap(map);
            });
        })
    }

    const computeTotalDistance = route => {
        let total = 0;
        console.log(route)
        const myRoute = route.routes[0];
        if (!myRoute) {
            return;
        }

        for (let i = 0; i < myRoute.legs.length; i++) {
            total += myRoute.legs[i].distance.value;
        }
        return total / 1000;
    }

    const handleFlag = async flag => {
        console.log('currentLocationString: ', currentLocationString)
        let markers2 = markers

        if (window.google) {
            const a = data.filter(i => i['type'].includes(flag))
            for (const b of a) {
                const infoWindow = new google.maps.InfoWindow({
                    content: `<h3>Facility Name: ${b.name}</h3><p>Openings: ${b.openings}</p><p>Tel: <u>${b.telephone}</u></p>
                <p>Address: ${b.address}</p>`,
                });

                const location = new google.maps.LatLng(b.latitude, b.longitude)

                const marker = new google.maps.Marker({
                    position: location,
                    icon: {url: iconBase + s[s.findIndex(x => x.name === flag)]?.file},
                    map,
                    optimized: true,
                    title: `${b.type}`,
                });

                marker.addListener('mouseover', () => {
                    infoWindow.open(map, marker);
                });
                marker.addListener('mouseout', () => {
                    infoWindow.close(map, marker);
                });

                markers2.push(marker)
            }
        }

        setMarkers(markers2)
    }

    const clear = async () => {
        markers.map(i => {
            i?.setMap(null);
        })
        console.log(directionsRenderers)

        directionsRenderers.map(({directionsRenderer}) => {
            directionsRenderer?.setMap(null);
        })

        circles.map(i => {
            i?.setMap(null);
        })

        setMarkers([])
        setDirectionsRenderers([])
        setCircles([])
        setRadius(0)
        setCurrentLocationString('')
        setTotalDistance(0)
    }

    const drawCircle = () => {
        console.log(radius)
        let circles2 = circles
        markers.map(m => {
            const circle = new google.maps.Circle({
                map,
                radius: Number(radius),    // 10 miles in metres
                fillColor: '#fa82ce',
                strokeColor: "rgba(255,0,0,0)"
            });
            circles2.push(circle)
            console.log(circle)
            circle.bindTo('center', m, 'position')
        })
        setCircles(circles2)
    }


    return (
        <Container className={'page-container'}>
            <Row>
                <Col xl={4} sm={4} lg={4}>
                    <p>Choose Types:</p>
                    <select onChange={e => setSelectedType(e.target.value)}>
                        <option key='999' value={''}/>
                        {generateSelect()}
                    </select>
                    <p>Your Current Location (Higher Priority): {JSON.stringify(currentLocation)}</p>
                    <Label htmlFor={'currentLocationString'}>Input your location: </Label>
                    <Input name={'currentLocationString'} type={'text'}
                           onChange={e => setCurrentLocationString(e.target.value)}
                           value={currentLocationString}
                    />
                    <br/>
                    <br/>
                    <Label htmlFor={'radius'}>Input Radius (metres): </Label>
                    <Input name={'radius'} type={'text'} onChange={e => setRadius(e.target.value)}
                           value={radius}/>
                    <Button className={'btn-success'} onClick={() => drawCircle()}>Draw Circle</Button>
                    <br/>
                    <br/>
                    <p>Total Distance (km): {totalDistance}</p>
                    <br/>
                    <Button className={'btn-danger'} onClick={() => clear()}>Clear</Button>
                    <br/>
                    <br/>
                </Col>
                <Col xl={8} sm={8} lg={8}>
                    <Wrapper apiKey={apiKey} render={render}/>
                </Col>
            </Row>
        </Container>)

}
export default Map