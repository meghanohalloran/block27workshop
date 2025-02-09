import React, { useState } from "react";

const SignUpForm = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);


const handleSubmit = async (event) => {
  event.preventDefault();
      try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      
      const result = await response.json();
      setToken(result.token);
      console.log(result);
    } catch (err) {
      setError(err.message);
    }
  
};

return (
  <>
  <h2>Sign Up</h2>
  {error && <p>{error}</p>}
  <form onSubmit={handleSubmit}>
    <label>
      Username:
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
    </label>
  
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
</>
);
};
export default SignUpForm;