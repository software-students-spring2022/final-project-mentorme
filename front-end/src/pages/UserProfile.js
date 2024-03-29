import React from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/UserProfile.css"
import BurgerMenu from "../components/BurgerMenu"
import Button from "../components/Button"
import { useState, useEffect } from 'react'
import axios from 'axios'

const UserProfile = props => {
  const location = useLocation()
  const [userData, setUserData] = useState([{}]);
  const [error, setError] = useState('')
  const [userinfo, setUserInfo] = useState('')

  const user = location.state.user
  localStorage.setItem("conv", null);

  return (
    <div className="UserProfile">
      <BurgerMenu state={{ user: user }} />
      <section className="main-content">

        {error && <p className="Profile-error">{error}</p>}

        <h1>{user.first_name} {user.last_name} </h1>
        <img src={user.picture}  className="user-picture" alt="profile" />
        <br />
        <Link to="/mentorme/EditProfile" state={{ user: user }}><Button size="btn--default" buttonStyle="btn--primary--solid"> Edit Profile </Button></Link>
        <br />
        <Link to="/mentorMe/UserProfile/ChatsHistory" state={{ user: user }}><Button size="btn--default" buttonStyle="btn--primary--solid"> Chat History</Button></Link>
        <p>
          <br />
          <br />
          {user["bio"]}
          <br />
          <br />
          <br />
        </p>
        <Link to="/mentorme" state={{ user: user }}><Button size="btn--default" buttonStyle="btn--primary--solid"> Return </Button></Link>
      </section>
    </div>
  )
}



export default UserProfile