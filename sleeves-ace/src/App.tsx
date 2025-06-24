import "./App.css";
import { useState, useEffect } from "react";
import LoginForm from "./components/login";
import MainApp from "./components/mainpage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("loggedIn");
    if (stored === "true") setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <MainApp onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}
