import "./App.css";
import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import Results from "./components/Results";

function App() {
  const [isEntrying, setIsEntrying] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const formData = {
    isEntrying: isEntrying,
    setIsEntrying: setIsEntrying,
    name: name,
    setName: setName,
    email: email,
    setEmail: setEmail,
    password1: password1,
    setPassword1: setPassword1,
    password2: password2,
    setPassword2: setPassword2,
  };

  return (
    <div className="App">
      <h1>{isEntrying ? "Create Account" : "Results"}</h1>
      {isEntrying ? (
        <RegisterForm formData={formData} />
      ) : (
        <Results formData={formData} />
      )}
    </div>
  );
}

export default App;
