import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Jobs from "./pages/jobs/Jobs";
import Learning from "./pages/learning/Learning";
import MainContent from "./pages/Profile/MainContent";
import ContactInfoPopup from "./components/ContactInfoPopup";
import { Route, BrowserRouter as Router } from "react-router-dom";
import MainFeedContent from "./pages/Home/MainFeedContent";
import Login from "./pages/logIn/Login";

import MyNetwork from "./pages/MyNetwork/MyNetwork";
import FullPageLoader from "./components/loaders/FullPageLoader";

function App() {
  const currentUserID = "5fc4c48fed266800170ea3d8";
  const [currentUserName, setCurrentUserName] = React.useState("");
  const [currentJobTitle, setCurrentJobTitle] = React.useState("");
  const [currentProfilePicture, setCurrentProfilePicture] = React.useState("");

  const [isContactInfoOpen, setIsContactInfoOpen] = React.useState(false);

  const contactInfoHandler = () => {
    setIsContactInfoOpen(!isContactInfoOpen);
  };

  const fetchUserDataHandler = async (id) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        },
      });
      let data = await response.json();
      setCurrentUserName(`${data.name} ${data.surname}`);
      setCurrentJobTitle(data.title);
      setCurrentProfilePicture(data.image);
    } catch (er) {
      console.log(er);
    }
  };

  React.useEffect(() => {
    fetchUserDataHandler(currentUserID);
  }, []);

  return (
    <Router>
      <Route path='/' exact>
        <Login />
      </Route>
      <Route path='/'>
        <NavBar jobTitle={currentJobTitle} name={currentUserName} userID={currentUserID} profilePicture={currentProfilePicture} />
      </Route>
      <Route path='/feed' exact>
        <MainFeedContent jobTitle={currentJobTitle} name={currentUserName} userID={currentUserID} profilePicture={currentProfilePicture} />
      </Route>
      <Route path='/profile/:id' exact>
        <MainContent contactInfoHandler={contactInfoHandler} loggedInUserID={currentUserID} />
      </Route>
      <Route path='/network' exact>
        <MyNetwork />
      </Route>
      {isContactInfoOpen && <ContactInfoPopup contactInfoHandler={contactInfoHandler} />}
      <Route path='/learning' exact component={Learning} />
      <Route path='/jobs' exact component={Jobs} />

      <Route path='/' component={Footer} />
      <FullPageLoader />
    </Router>
  );
}

export default App;
