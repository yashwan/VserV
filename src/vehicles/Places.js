/** @format */

import React,{useState,useEffect} from "react";
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from "react-places-autocomplete";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyAhI-54fHpSDg1cVr7wt8IHsMjmib59U7E");
Geocode.enableDebug();
const Places = (props) => {
    const [place, setPlace] = useState("");
    const [address, setAddress] = useState("");

    const handleSelect = (p) => {
		geocodeByAddress(p)
			.then((results) => {
				setAddress(results[0].formatted_address);
				setPlace("");
				return getLatLng(results[0]);
			})
			.then((latLng) => {
                
				props.setState({
					...props.state,
					mapPosition: {
						lat: latLng.lat,
						lng: latLng.lng,
					},
					markerPosition: {
						lat: latLng.lat,
						lng: latLng.lng,
					},
				});
			})
			.catch((error) => console.error("Error", error));
	};
    useEffect(() => {
        props.setState({
            ...props.state,
            address: address ? address : props.state.address,
        });
        Geocode.fromLatLng(props.state.mapPosition.lat, props.state.mapPosition.lng).then(
			(response) => {
				props.setState({
					...props.state,
					address: response.results[0].formatted_address ,
				});
			},
		);
    }, [props.state.mapPosition]);
	return (
		<div>
			<PlacesAutocomplete
			
				value={place}
				onChange={setPlace}
				onSelect={handleSelect}
               
                >
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<input
							{...getInputProps({
								placeholder: "Search Places ...",
								className: "location-search-input",
							})}
							class='form-control mt-2 mb-2'
						/>
						<div className='autocomplete-dropdown-container'>
							{loading && <div>Loading...</div>}
							{suggestions.map((suggestion) => {
								const className = suggestion.active
									? "suggestion-item--active"
									: "suggestion-item";
								// inline style for demonstration purpose
								const style = suggestion.active
									? { backgroundColor: "#fafafa", cursor: "pointer" }
									: { backgroundColor: "#ffffff", cursor: "pointer" };
								return (
									<div
										className='input-suggestion'
										{...getSuggestionItemProps(suggestion, {
											style,
										})}>
										<span>{suggestion.description}</span>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</PlacesAutocomplete>
            {/* <button
            className='btn btn-primary mt-2'
            onClick={() => {
                props.setState({ ...props.state, address: address });
                setPlace("");
            }}
            >
                
                Confirm spot
            </button> */}
		</div>
	);
};

export default Places;
