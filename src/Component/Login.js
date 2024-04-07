import React, { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  function handleChange(event) {
    setUserName(event.target.value);
  }

  function handleLogin() {
    setIsLoggedIn(true);
    setUserName(userName);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUserName("");
  }

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>Welcome {userName}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input type="text" value={userName} onChange={handleChange} />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </>
  );
}

export default ConditionalRendering;
