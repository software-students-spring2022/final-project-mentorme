import './styles/App.css';

import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import RateAdvisorHome from "./pages/RateAdvisorHome"
import SearchResult from "./pages/SearchResult"
import CommentsDisplay from "./pages/CommentsDisplay"
import PostCommentPage from "./pages/PostCommentPage"
import MentorMeHome from "./pages/MentorMeHome"
import ProfileDisplay from "./pages/ProfileDisplay"
import IndividualProfile from "./pages/IndividualProfile"
import IndividualChat from "./pages/messenger/Messenger"
import RatePage from "./pages/RatePage"
import UserProfile from "./pages/UserProfile"
import EditProfile from "./pages/EditProfile"
import ChatsHistory from "./pages/messenger/Messenger"
import Login from "./pages/Login"
import SingUp from "./pages/SignUp"
import CreateAdvisor from "./pages/CreateAdvisor"


/* Mateus 03/04
The App file is used to house the routing on the 
example files given by the professor. I planning on 
outlining all the pages we have for the app as now, inside 
each page I will place the picture of the our wireframe for
the sake of ilustration. Who ever is responsible for that one page can 
remove that picture afterwards.
I am naming as it is in the app map
*/

/*Questions:
How to go back to a previous page without crashin the site?
NVM, they do that on their own once they both css and the .js correspondent files
have content and are properly set.
*/


const App = props => {
  const [user, setUser] = useState({}) // a state variable that stores the logged-in user, if any

  return (
    <div className="container">
      <Router>
        {/* pass the setter function that can be called if the user successfully logs in from the login screen */}
        {/* <PrimaryNav user={user} setuser={setUser} /> */}
        <Routes>
          {/* a route to the home screen */}
          <Route path="/" element={<Home user={user} />} />

          {/* a route to the about us screen */}


          <Route path="/rateAdvisor" element={<RateAdvisorHome user={user} />} />

          <Route path="/mentorMe" element={<MentorMeHome user={user} />} />


          {/* a route to show the details of a specific animal, given its id - we pass the user data in as a prop and the animalId is passed in automatically as a param by react */}
          <Route exact
            path="/rateAdvisor/searchResult"
            element={<SearchResult user={user} />}
          />

          <Route exact path="/rateAdvisor/searchResult/createAdvisor" element={<CreateAdvisor />} />

          <Route exact
            path="/rateAdvisor/searchResult/commentsDisplay"
            element={<CommentsDisplay user={user} />}
          />
          <Route
            path="/rateAdvisor/searchResult/commentsDisplay/postCommentPage"
            element={<PostCommentPage user={user} />}

          />
          {/* a route to show a list of animals - we pass the user data in as a prop */}

          <Route exact path="/mentorMe/profileDisplay" element={<ProfileDisplay user={user} />} />

          <Route exact path="/mentorMe/UserProfile" element={<UserProfile user={user} />} />
          <Route exact path="/mentorMe/EditProfile" element={<EditProfile user={user} />} />

          <Route path="/mentorMe/profileDisplay/individualProfile" element={<IndividualProfile user={user} />} />
          <Route path="/mentorMe/profileDisplay/individualProfile/individualChat" element={<IndividualChat user={user} />} />
          <Route path="/mentorMe/profileDisplay/individualProfile/individualChat/ratePage" element={<RatePage user={user} />} />

          <Route path="/mentorMe/UserProfile/ChatsHistory" element={<ChatsHistory user={user} />} />
          {/* a route to the log in form... this form is a placeholder only */}
          <Route
            path="/logIn"
            element={<Login user={user} setuser={setUser} />}
          />

          {/* a route to logout */}
          <Route
            path="/signUp"
            element={<SingUp user={user} setuser={setUser} />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
