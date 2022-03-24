/** @format */

import React, { useEffect, useState } from "react";
import img1 from "./delivery.png";
import { useHistory, useParams } from "react-router-dom";
import { auth, db } from "./Firebase";
import { toast } from "react-toastify";

const Part = () => {
	const history = useHistory();
	const { id } = useParams();
	const [state, setState] = useState(false);
	const otp = Math.floor(Math.random() * 100000);
	const u = auth.currentUser;
    useEffect(() => {
        const timer = setTimeout(() => {
            setState(true)
            toast("Please Click Next to Continue")
        }, 10000);
        return () => clearTimeout(timer);
        
      }, []);
      useEffect(() => {
        return () => {
          if (history.action === 'POP') {
            db.collection('booking').doc(id).update({
              status:"cancelled by user",
              order:"cancelled",
            }).then(()=>{
              toast("Your Order has been Cancelled")
            })
          }
        };
      }, [history]);
      const cS=(e)=>{
        e.preventDefault();
        console.log(id)
        db.collection('booking').doc(id).update({
          status:"cancelled by user",
          order:"cancelled",
        }).then(()=>{
          toast("Your Order has been Cancelled")
          history.push("/Home")
        })
      }
      const sS=(e)=>{
        e.preventDefault();
        
        db.collection('booking').doc(id).update({
          otp:otp,
          status:"delivered to partner,waiting for complete service",
        }).then(()=>{
          toast("Your Order has been Delivered")
          history.push("/delivery/"+id)
        })
      }
	return (
		<div class=" part ">
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 170'>
				<path
					fill='#5000ca'
					fill-opacity='1'
					d='M0,160L1440,0L1440,0L0,0Z'></path>
			</svg>
			<div class='container curve_con '>
            <center>
    <h1>Please Don't Press Back please Wait </h1>
    <h1><b>{state?"Our Partner Arrived Please Share Otp":"Our Partner Will Arrive Soon To Your Location"}</b></h1>
    <img src={img1} alt="delivery"  style={{height:"50vh"}}/>
    <h2><b>{state?"OTP:"+otp:""}</b></h2>
    </center>
				{state?<button class='btn btn-primary btn-block' onClick={sS}>Next</button>:""}
				<button class='btn btn-danger btn-block' onClick={cS}>Cancel</button>
			</div>
		</div>
	);
};

export default Part;
