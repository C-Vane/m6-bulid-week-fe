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
import Registration from "./pages/Registration/Registration";

import MyNetwork from "./pages/MyNetwork/MyNetwork";
import FullPageLoader from "./components/loaders/FullPageLoader";
import { getFunction } from "./components/CRUDFunctions";

function App() {
  const [currentName, setCurrentName] = React.useState("");
  const [currentJobTitle, setCurrentJobTitle] = React.useState("");
  const [currentProfilePicture, setCurrentProfilePicture] = React.useState("");
  const [currentUserID, setCurrentUserId] = React.useState("");
  const [currentUsername, setCurrentUsername] = React.useState("");
  const [isContactInfoOpen, setIsContactInfoOpen] = React.useState(false);

  const contactInfoHandler = () => {
    setIsContactInfoOpen(!isContactInfoOpen);
  };

  const fetchUserDataHandler = async () => {
    let data = await getFunction("profile/user/userName");
    if (data && data.name) {
      setCurrentName(`${data.name} ${data.surname}`);
      setCurrentJobTitle(data.title);
      setCurrentProfilePicture(data.image);
      setCurrentUserId(data._id);
      setCurrentUsername(data.username);
    }
  };

  // React.useEffect(() => {
  //   fetchUserDataHandler(currentUserID);
  // }, []);

  return (
    <Router>
      <Route path='/' exact>
        <Login />
      </Route>
      <Route path='/'>
        <NavBar jobTitle={currentJobTitle} name={currentName} userName={currentUsername} userID={currentUserID} profilePicture={currentProfilePicture} />
      </Route>
      <Route path='/feed' exact>
        <MainFeedContent jobTitle={currentJobTitle} name={currentName} userID={currentUserID} userName={currentUsername} profilePicture={currentProfilePicture} />
      </Route>
      <Route path='/profile/:userName' exact>
        <MainContent contactInfoHandler={contactInfoHandler} loggedInUserID={currentUserID} userName={currentUsername} />
      </Route>
      <Route path='/network' exact>
        <MyNetwork />
      </Route>
      {isContactInfoOpen && <ContactInfoPopup contactInfoHandler={contactInfoHandler} />}
      <Route path='/signup' exact>
        <Registration />
      </Route>
      <Route path='/learning' exact component={Learning} />
      <Route path='/jobs' exact component={Jobs} />

      <Route path='/' component={Footer} />
      <FullPageLoader />
    </Router>
  );
}

export default App;
