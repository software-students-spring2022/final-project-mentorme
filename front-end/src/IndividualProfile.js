import React from "react"
import { Link } from "react-router-dom"
import "./styles/IndividualProfile.css"
import { Button } from "./components/Button";


const IndividualProfile = props => {
  return (
    <div className="IndividualProfile">
      <h1>Welcome!</h1>
      <section className="main-content">
        <p>
          Individual Profile
          <br />
          <br />
          <Link to="/mentorMe/:profileDisplay/:individualProfile/:individualChat"><Button buttonStyle={"btn--warning--solid"} buttonSize={'btn--long'}> Chat </Button></Link>
        </p>
      </section>
    </div>
  )
}

export default IndividualProfile