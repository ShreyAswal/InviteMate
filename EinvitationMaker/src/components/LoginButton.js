import React, { useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Combined.css";

function LoginButton() {
  //   const { isAuth } = useAuth0;
  const [logOut, setLogOut] = useState(false);


  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const openModel = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <div>
      {/* {isAuthenticated && <p>{user.name}</p>} */}
      {isAuthenticated ? (
        <div className="profile" onClick={() => setLogOut(true)}>
          <img id="profilePic" src={user.picture} alt="profile"></img>
          <p id="profileName">{user.name}</p>
        </div>
      ) : (
        <button id="loginButton" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      )}
      {logOut && (
        <div className="questionContainer">
          <div className="question">Would you like to Log Out?</div>
          <div>
            <button onClick={() => openModel()} className="buttonOptions">
              Yes
            </button>
            <button onClick={() => setLogOut(false)} className="buttonOptions">
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginButton;