import React, { useState, useEffect } from "react";

const Auth = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleRegister = () => {
    const newUser = { email, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
    } else {
      alert("Felaktiga inloggningsuppgifter");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <p>Welcome! {user.email}!</p>
          <button onClick={handleLogout}>Log out</button>
        </>
      ) : (
        <>
          <input type="email" placeholder="E-post" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Lösenord" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleRegister}>Sign up</button>
          <button onClick={handleLogin}>Log in</button>
        </>
      )}
    </div>
  );
};

export default Auth;
