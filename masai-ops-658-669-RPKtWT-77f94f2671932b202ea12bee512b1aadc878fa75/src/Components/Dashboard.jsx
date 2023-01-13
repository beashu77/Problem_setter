import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout_isAuth, meetUps } from "../Redux/AppReducer/action";

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetup_data = useSelector((store) => store.AppReducer.meetupsData);

  const isAuth = useSelector((store) => store.AppReducer.isAuth);
console.log(isAuth)
  useEffect(() => {
    dispatch(meetUps());
  }, []);

  const handleLogout = () => {
    dispatch(logout_isAuth());
  };

  return (
    <div>
      {isAuth===true ? (
        <div
          style={{
            backgroundColor: "#9f73ab",
            display: "flex",
            padding: "2rem",
            justifyContent: "space-evenly",
          }}
        >
          <button onClick={()=>{handleLogout()}}>LOGOUT</button>
          <button className="my-events"> Show My Events </button>
          <div></div>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#9f73ab",
            display: "flex",
            padding: "2rem",
            justifyContent: "space-evenly",
          }}
        >
          <button>
            <Link to={"/login"}>Login</Link>
          </button>
          <button className="register">
            <Link to={"/register"}>Register</Link>
          </button>
          <button className="my-events"> Show My Events </button>
          <div></div>
        </div>
      )}

      <h2 style={{ margin: "auto" }}>Upcoming Events</h2>
      <div
        className="meetups_wrapper"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gridTemplateRows: "auto",
          gap: "25px",
        }}
      >
        {meetup_data &&
          meetup_data.map((elem) => {
            return (
              <div
                key={elem.id}
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  width: "300px",
                  height: "auto",
                  padding: "1rem",
                }}
              >
                <img
                  className="image"
                  alt="img"
                  src={elem.image}
                  style={{ height: "300px", width: "300px" }}
                />
                <h4 className="title">{elem.title} </h4>
                <div className="location"> {elem.location}</div>
                <div className="date">{elem.date} </div>
                <div className="time"> {elem.time}</div>
                <div className="theme">{elem.theme} </div>
                <div className="description">{elem.description} </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
