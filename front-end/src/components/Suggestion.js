import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Suggestion.css';

{/* 
    props that Suggestion component takes:
        - suggestions: a list of objects containing personal information
        - navigateTo: a path to the page to navigate to
*/}

const Suggestion = ( {suggestions, navigateTo} ) => {
    const navigate = useNavigate()
    const handleClick = (e, id) => {
        e.preventDefault()
        navigate(navigateTo, { state: { id } })
    }
    return (
        <div className="suggestions">
            {suggestions.map((person) => (
                // each suggestion contaienr
                <div className="suggestion" key={person.over_all == undefined ? person.id: person._id} onClick={(e) => handleClick(e, person.over_all == undefined ? person.id: person._id)}>
                    {/* name and info container */}
                    <div className="name">
                        <div>{`${person.last_name}, ${person.first_name}`}</div>
                        <div>{`${person.department != undefined ? person.department+',': ''} ${person.school}`}</div>
                    </div>
                    {/* score container */}
                    <div className="score">
                        <div>{`${person.over_all == undefined ? person.currentScore.toFixed(2): person.over_all.toFixed(2)}/5.0`}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Suggestion;