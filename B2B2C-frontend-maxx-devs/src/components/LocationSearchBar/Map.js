import React from "react";
import { GoogleMap, withGoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import * as parkData from "./skateboard-parks.json";

function Map() {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.4211, lng: -75.6903 }}>
        {parkData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={{
              lat: park.geometry.coordinates[1],
              lng: park.geometry.coordinates[0],
            }}
          />
        ))}
      </GoogleMap>
    ))
  );
  return (
    <div>
      <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default Map;
