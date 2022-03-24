import * as types from './ActionType';
import {auth,db} from '../Firebase';
import {toast} from 'react-toastify';
import { useHistory } from 'react-router-dom';
//const history = useHistory();
const signUpStart = () => {
    return {
        type: types.SIGN_UP_START
    }
}

const signUpSuccess = (user) => {
    
    return {
        type: types.SIGN_UP_SUCCESS,
        //payload: user
    }
}

const signUpFail = (error) => {
    
    return {
        type: types.SIGN_UP_FAIL,
        payload: error.messege,
        
    }
}
const loginStart = () => {
    return {
        type: types.LOGIN_START
    }
}

const loginSuccess = (user) => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: user
    }
}

const loginFail = (error) => {
    return {
        type: types.LOGIN_FAIL,
        payload: error.message,
    }
}
const logOut = () => {
    return {
        type: types.LOGOUT
    }
}
export const logout = () => {
    return dispatch => {
        auth.signOut().then(() => {
            dispatch(logOut());
        })
    }
}

export const login = (email,password) => {
    return dispatch => {
        dispatch(loginStart());
        auth.signInWithEmailAndPassword(email,password)
        .then(user => {
            dispatch(loginSuccess(user))
            toast.success('Login Successful');
        })
        .catch(error => {
            dispatch(loginFail(error));
            toast.error(error.message);
        })
    }
}

export const signUp = (email,password) => {
    return (dispatch) => {
        dispatch(signUpStart());
        auth.createUserWithEmailAndPassword(email,password)
        .then(user => {
            
            dispatch(signUpSuccess(user));
            db.collection('users').doc(user.user.uid).set({
                email: email,
                password: password
            }).then(()=>{
                toast.success('Signup Successful');
            }).then(()=>{
                useHistory().push('/Login');
            })
            
        })
        .catch(error => {
            
            dispatch(signUpFail(error.message));
            toast.error(error.message);
            
        })
    }
};