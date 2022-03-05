import React from "react"
import { Link } from "react-router-dom"
// import logo from './logo.svg';
import "./styles/RatePage.css"
import image from './images/11 Rate.png'
const RatePage = props => {
  return (
    <div className="RatePage">
      <h1>Welcome!</h1>
      <section className="main-content">
        <img className = "image" alt="welcome!" src = {image} />
        <p>
            Rate Mentor Page
          <br />
          <br />
          <Link to="/mentorMe">Back to mentorMe home!</Link>
        </p>
      </section>
    </div>
  )
}

export default RatePage