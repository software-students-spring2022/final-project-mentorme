import React from "react"
import { Link } from "react-router-dom"
import "../styles/SearchResult.css"
import SearchBar from '../components/SearchBar'
import { Container, Col, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import BurgerMenu from "../components/BurgerMenu"
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Button } from "../components/Button"
import advisorIcon from '../images/defaultadvisoricon.jpg'


const SearchResult = props => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState('')
  const location = useLocation();
  const filterOptions = ['CAS', 'Stern', 'Silver', 'Tandon', 'Steinhardt'];

  const getSearchResult = async () => {
    await axios.get("http://localhost:4000/rateAdvisor/searchResult", { params: { name: location.state.name, options: location.state.options } })
      .then(res => {
        setUserData(res.data);
      })
      .catch(err => {
        setError(err)
      })
  }

  const getFilterResult = async () => {
    await axios.get("http://localhost:4000/rateAdvisor/searchResult/2", { params: { filter: location.state.filter } })
      .then(res => {
        setUserData(res.data);
      })
      .catch(err => {
        setError(err)
      })
  }

  useEffect(() => {
    if (typeof location.state.name !== 'undefined') {
      getSearchResult()
    } else {
      getFilterResult()
    }
  }, [location.state])

  return (

    <div className="SearchResult">
      <BurgerMenu />
      <div className="searchDiv">
        <div className="title">        <h2>Searched Results</h2>
        </div>
        <br />
        <div className="searchBar">
          <SearchBar label='Search Advisor' navigateTo='/rateAdvisor/searchResult' filterOptions={filterOptions} />
        </div>
        <br />
        <div className="newAdv">
          <Link to="createAdvisor"><Button className="theButton" buttonStyle={"btn--warning--solid"} buttonSize={'btn--medium'}>Didn't find your advisor ? Add an Advisor</Button></Link>

        </div>





        {/* </section> */}
      </div>


      {/* list of search result  */}
      <div className="resultList">
        <Container>
          <div className="list-group">
            {userData.map((data, i) => (
              <Item first_name={data.first_name} last_name={data.last_name} score={data.currentScore.toFixed(2)} school={data.school} id={data.id} field={data.field} department={data.department} key={i} />
            ))}
          </div>
        </Container>
      </div>

    </div >

  )
}

const Item = props => {
  return (
    <>
      <Link to="/rateAdvisor/searchResult/commentsDisplay" state={{ id: props.id }} className="list-group-item list-group-item-action" aria-current="">
        <Container className="container-search">
          <Row className="rows">
            <Col xs={4} md={2} className="columns">
              <div className="advisorPic">
                <img className="advisor-picture" src={advisorIcon} alt="picture" />
              </div>
            </Col>
            <Col xs={8} md={10} className="columns">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.first_name + ' ' + props.last_name}</h5>
                <small className="text-muted">{props.score}/5</small>
              </div >
              <div className="school-name">
                <small>{props.school}</small>
              </div>
              <div className="school-name">
                <small>{props.department}</small>
              </div>

            </Col>
          </Row>
        </Container>


      </Link>

    </>

  )
}

export default SearchResult