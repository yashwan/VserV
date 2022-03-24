import React,{useState,useEffect} from 'react'

import Signup from './Signup';
import Login from './Login';
import { Route, Switch,useHistory } from 'react-router-dom';
import {auth} from './Firebase';
import { useSelector } from 'react-redux';
function Alog() {
  const history=useHistory();
  const {currentUser}=useSelector(state=>state.user);
  const [user,setUser]=useState(null);
  
  return (
    <div className="Alog">
    <Switch>
      <Route  exact path='/' component={Login} />
      <Route path='/Login' component={Login} />
      <Route  path='/Signup' component={Signup} />
    </Switch>
     
    </div>
  );
}
//styles

export default Alog;
