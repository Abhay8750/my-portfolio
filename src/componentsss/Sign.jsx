import React, { useState } from "react";
import "./Sign.css";

function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setMessage("Please fill all fields ❌");
    } else {
      setMessage("Login Successful ✅");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="signin-page">
      <form className="signin-box" onSubmit={handleSubmit}>
        <h1>Sign In</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p className="message">{message}</p>
      </form>
    </div>
  );
}

export default Sign;
