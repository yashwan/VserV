/** @format */

import React, { useState, useEffect } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Geocode from "react-geocode";
import Places from "./Places";
Geocode.setApiKey("AIzaSyAhI-54fHpSDg1cVr7wt8IHsMjmib59U7E");
Geocode.enableDebug();
const Gmaps = (props) => {
	const [state, setState] = useState({
		address: "",
		mapPosition: {
			lat: 0,
			lng: 0,
		},
		markerPosition: {
			lat: 0,
			lng: 0,
		},
	});
	const [selectedPlace, setSelectedPlace] = useState("your Location");
	const onInfoWindowClose = (event) => {};

	const onMarkerDragEnd = (event) => {
		let newLat = event.latLng.lat(),
			newLng = event.latLng.lng();

		Geocode.fromLatLng(newLat, newLng).then((response) => {
			setState({
				address: response.results[0].formatted_address
					? response.results[0].formatted_address
					: selectedPlace,
				markerPosition: {
					lat: newLat,
					lng: newLng,
				},
				mapPosition: {
					lat: newLat,
					lng: newLng,
				},
			});
		});
	};
	return (
		<div>
			<Map google={props.google} zoom={14}
                style={{ width: "100%", height: "100%" }}
             >
                <Marker
                    onDragend={onMarkerDragEnd}
                    name={"Current location"}
                    position={state.markerPosition}
                />
                <InfoWindow
                    onClose={onInfoWindowClose}
                    position={state.markerPosition}
                    visible={true}
                >
                    <div>
                        <h1>{state.address}</h1>
                    </div>
                </InfoWindow>

            </Map>

			
		</div>
	);
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyAhI-54fHpSDg1cVr7wt8IHsMjmib59U7E",
})(Gmaps);
