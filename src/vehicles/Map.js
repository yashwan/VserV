/** @format */

import React, { useState, useEffect } from "react";
import withScriptjs from "react-google-maps/lib/withScriptjs";
import {
	withGoogleMap,
	GoogleMap,
	InfoWindow,
	Marker,
} from "react-google-maps";

import scriptLoader from "react-async-script-loader";
import Geocode from "react-geocode";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
//import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import { toast } from "react-toastify";
import Places from "./Places";
Geocode.setApiKey("YOUR_API_KEY");
Geocode.enableDebug();
const AsyncMap = 
		withGoogleMap((props) => (
			<GoogleMap
				google={window.google}
				defaultZoom={17}
				defaultCenter={{
					lat: props.state.mapPosition.lat,
					lng: props.state.mapPosition.lng,
				}}>
				{/* For Auto complete Search Box */}

				{/*Marker*/}
				<InfoWindow
					onClose={props.onInfoWindowClose}
					position={{
						lat: props.state.mapPosition.lat + 0.0005,
						lng: props.state.mapPosition.lng,
					}}>
					<div>
						<span style={{ padding: 0, margin: 0 }}>{props.state.address}</span>
					</div>
				</InfoWindow>
				<Marker
					google={window.google}
					name={"Dolores park"}
					draggable={true}
					tracksViewChanges={false}
					onDragEnd={props.onMarkerDragEnd}
					position={{
						lat: props.state.mapPosition.lat,
						lng: props.state.mapPosition.lng,
					}}
				/>

				{/* InfoWindow on top of marker */}
			</GoogleMap>
		),
	);
const Maps = (props) => {
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

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			setState({
				...state,
				mapPosition: {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				},
				markerPosition: {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				},
			});
		});

		toast.success("please click update to save changes");
	}, []);

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
	console.log(process.env);

	
	return (
		<div>
			<AsyncMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
				state={state}
				onMarkerDragEnd={onMarkerDragEnd}
				onInfoWindowClose={onInfoWindowClose}
				
			/>

			<Places setState={setState} state={state} />

			<div className='form-group mt-2'>
				<label>Address</label>
				<input
					type='text'
					name='address'
					className='form-control'
					value={state.address}
					onChange={(e) => {
						setState({
							...state,
							address: e.target.value,
						});
						props.setAdd(state.address);
					}}
				/>
			</div>

			<button
				class='btn btn-primary'
				onClick={(e) => {
					e.preventDefault();
					props.setAdd(state.address + " ");
					props.setLat(state.mapPosition.lat);
					props.setLng(state.mapPosition.lng);
				}}>
				Update Location
			</button>
		</div>
	);
};

export default Maps;
