import React, {useState} from "react";
import AppRouter from "components/Router";
import {authService} from "fBase";

function App() {
  authService.currentUser
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
  <>
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy;{new Date().getFullYear()} Nwitter</footer>
  </>
  );
}

export default App;
