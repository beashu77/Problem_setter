import * as types from "./actionType";

import axios from "axios";

export const meetUps =()=>dispatch=>{

    dispatch({
        type:types.METTUPS_REQUEST
    })

    return axios({
        method:"GET",
        url:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/meetups`,
        
    }).then((res)=>{
        return dispatch({
            type:types.METTUPS_SUCCESS,
            payload:res.data
        })
    })
    .catch((err)=>{
        return dispatch({type:types.METTUPS_FAILURE,payload:err})
    })

}



export const login =()=>dispatch=>{

    dispatch({
        type:types.USER_REQUEST
    })

    return axios({
        method:"GET",
        url:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`,
        
    }).then((res)=>{
        return dispatch({
            type:types.USER_SUCCESS,
            payload:res.data
        })
    })
    .catch((err)=>{
        return dispatch({type:types.USER_FAILURE,payload:err})
    })

}

export const login_isAuth =()=>dispatch=>{

    return dispatch({
        type:types.LOGIN_SUCCESS,
        
    })

}

export const logout_isAuth =()=>dispatch=>{

    return dispatch({
        type:types.LOGIN_FAILURE,
        
    })

}

export const register=(payload)=>dispatch=>{
    dispatch({
        type:types.REGISTER_REQUEST
    })

    return axios({
        method:"POST",
        url:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`,
        data:payload

    }).then((res)=>{
       
        return dispatch({
            type:types.REGISTER_SUCCESS,
            payload:res.data
           
        })
    })
    .then((res)=>{
        login()
    })
    .catch((err)=>{
        return dispatch({type:types.REGISTER_FAILURE,payload:err})
    })
}



