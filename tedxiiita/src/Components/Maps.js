import React from 'react'
import { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker , InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: 'screen',
  height: '300px'
};

const center = {
  lat: 25.4294,
  lng: 81.7702,
};

function MyComponent() {

    const [toggle , setToggle] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB87ZAO0sTbFpvGA0dN7ANXF3iKPFUP2Zw"
  })

  const [map, setMap] = useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        <Marker
            position={center}
            onClick={()=>{
                setToggle(true);                
            }}
            
        >

        </Marker>
         {toggle && <InfoWindow
            position={{
                lat: 25.4295,
                lng: 81.7702, 
            }}
        >
            <div>
                <h2>
                    This is a tedx event. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quae omnis a!.
                </h2>
            </div>
            </InfoWindow> }
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)