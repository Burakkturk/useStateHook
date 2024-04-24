import { useState } from "react";

const FormObject = () => {
  // const [username, setUsername] = useState("deneme");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
  })

  const { username, email, password} = formData

  

  const handleSubmit = (e) => {
    e.preventDefault()

    alert(`
    username:${username}
    email:${email}
    password:${password}
    `) 

};
  return (
    <div className="container mt-4">
      <h2 className="text-center text-success">FORM OBJECT IN REACT</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Hello {}
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            onChange={handleUsername}
            value={username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1">
            Email address: <span className="text-danger">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

export default FormObject;
