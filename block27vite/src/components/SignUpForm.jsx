import React, { useState } from "react";

const SignUpForm = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);


const handleSubmit = async (event) => {
  event.preventDefault();
  console.log("Form submitted");
};

return (
  <div>
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Password:
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
  );
};

export default SignUpForm;
