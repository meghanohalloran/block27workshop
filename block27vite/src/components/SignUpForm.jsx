import { useState } from "react";

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);


const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  return (
    <h2>Sign Up</h2>
  );
};

export default SignUpForm;


// export default function SignupForm() {
//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form>
//         <label>
//           Username: <input />
//         </label>
//         <label>
//           Password: <input />
//         </label>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }


// <input value={username} onChange={(e) => 
//   setUsername(e.target.value)} />
  


