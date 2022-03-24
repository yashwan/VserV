/** @format */

import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";
const About = () => {
	  const history = useHistory();
	useEffect(() => {
		return () => {
			if (history.action === 'POP') {
				
			}
		};
	}, [history]);
	return (
		<div className='About'>
			<div class='container'>
				<div class='row'>
					<div class='col-sm-12 shadow my-5'>
						<center>
							<h1>About Us .</h1>
						</center>
					</div>
				</div>
			</div>
			<div class='container'>
				<div class='row'>
					<div class='col-sm-12 shadow my-1'>
						<center>
							<p> Hola, Dear Customer We Are Heartly Welcome To the VseV App</p>
              <p> We Have Experienced Partners We will Service to Your Vehicle </p>
              <p> Thank You 😉</p>
						</center>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
