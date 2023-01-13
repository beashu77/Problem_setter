import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {login, login_isAuth } from '../Redux/AppReducer/action';

export default function Login() {

   const dispatch = useDispatch();
   const userData = useSelector((store)=>store.AppReducer.userData)

   const navigate = useNavigate();
 
   console.log(userData)
    useEffect(() => {
    dispatch(login())
    }, [])

    const [form, setForm] = useState({});
    const [msg,setMsg] =useState("")

    const handleChange = (e) => {
      const { name, value} = e.target;
  
      
        setForm({
          ...form,
          [name]: value
        });
      
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let flag = false;
       for(let i=0;i<userData.length;i++)
       {
        if(userData[i].name===form.name)
        {
            flag = true;

            if(userData[i].password===form.password)
            {
                dispatch(login_isAuth())
                navigate("/")
            }
            else{
              
               setMsg("Incorrect Password")
            }
           
        }
       }

       if(flag===false)
       {
         setMsg("User does not exists")
       }

      
    };

    

    return (
        <div>
            <form className = "auth_form"  >
                <input
                    type = "name"
                    className = "name"
                    placeholder = "Enter Name"
                    name='name'
                    value={form.name || ''}
                    onChange={(e)=>{handleChange(e)}}
                />
                <br />
                <input
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    name='password'
                    value={form.password || ''}
                    onChange={(e)=>{handleChange(e)}}
                />
                <br />
                <input className = "submit" type = "submit" onClick={(e)=>{handleSubmit(e)}}/>

            </form>    
        <h3  className='error-container'>{msg}</h3>
        </div>
    )
}
