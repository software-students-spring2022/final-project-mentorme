import React from "react"
import { Link } from "react-router-dom"
import "../styles/RateAdvisorHome.css"
import SearchBar from '../components/SearchBar'
import BurgerMenu from "../components/BurgerMenu"
import Filter from '../components/Filter'


const RateAdvisorHome = props => {
  const filterOptions = ['CAS', 'Stern', 'Silver', 'Tandon', 'Academic', 'OGS'];
  return (
  <div className="RateAdvisorHome">
    <BurgerMenu/>  
    <section className="main-content"> 
      <p>
        Rate Advisor Home
        <br />
        <br />
      </p>
      <div className="search">
        <SearchBar label='Search Advisor' navigateTo='/rateAdvisor/searchResult' isMentorMe={false} filterOptions={filterOptions}/>
        {/* <Filter options={filterOptions} navigateTo='/rateAdvisor/searchResult' /> */}
      </div>
    </section>
  </div>
  )
}

export default RateAdvisorHome