import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../Redux/AppReducer/action';

export default function Register() {

    const [form, setForm] = useState({});
    const dispatch=useDispatch();
    const userData = useSelector((store)=>store.AppReducer.userData)


    console.log(userData)

    
    useEffect(() => {
    dispatch(login())
    }, [])


    //    {
    //   "name": "Arjun",
    //   "password": "secret",
    //   "location": "bangalore",
    //   "interests": [
    //     "technology",
    //     "food",
    //     "movies",
    //     "culture",
    //     "art",
    //     "drama"
    //   ],
    //   "id": 5,
    //   "subscribed": [
    //     1,
    //     5
    //   ]
    // }

    const handleChange = (e) => {
      const { name, value} = e.target;
  

      if(name==="interests")
      {
        setForm({
            ...form,
            [name]: value
          });
      }
      else{
        setForm({
            ...form,
            [name]: value
          });
      }
    
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      form.interests = form.interests.trim().split(",")
      console.log(form);
      dispatch(register(form))
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
                    type = "text"
                    className = "location"
                    placeholder = "Location"
                       name='location'
                    value={form.location || ''}
                    onChange={(e)=>{handleChange(e)}}
                />
                <br />
                <input
                    type = "text"
                    className = "interests"
                    placeholder = "What are your interests? Add comma separated values"
                       name='interests'
                    value={form.interests || ''}
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
                <input  className = "submit" type = "submit" onClick={(e)=>{handleSubmit(e)}}/>

            </form>                
        </div>
    )
}