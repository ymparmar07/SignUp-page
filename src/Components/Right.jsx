import React, { useState } from "react";
import "./Style/right.css";

const Right = () => {
  const [details, setDetails] = useState({ email: "", fullname: "", password: "" });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Your details:", details);
    setIsSubmit(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  return (
    <div className="right">
      <div className="title">
        Let’s get started <br /> with a few simple steps
      </div>
      {isSubmit ? (
        <div className="submitted">
          Form Submitted Successfully! <br />
          Email: {details.email} <br />
          FullName: {details.fullname} <br />
          Password: {details.password}
        </div>
      ) : (
        
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                id="Email"
                value={details.email}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <label htmlFor="Fullname">FullName</label>
              <input
                type="text"
                name="fullname"
                id="Fullname"
                value={details.fullname}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                name="password"
                id="Password"
                value={details.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Sign up</button>
          </form>
        </div>
      )}
      <div className="footer">
        <div>
          By signing up, you agree to our <a href="/">Terms of Service.</a>
        </div>
        <div>
          Already have an account? <a href="/">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default Right;
