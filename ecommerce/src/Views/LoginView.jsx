import React, { useState } from 'react';
import LoginForm from '../components/LoginForm'


const LoginView = () => {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  // This where we get our user data. Once we've logged in this data is gonna be set.
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  // Error string because what the error is gonna to is to catch if or not our details are correct. It has a message in there to dislay
  const [error, setError] = useState("");

  //This function is going to be called when we're to log in.
  //We're gonna pass through details to this actual login method
  const Login = details => {
    console.log(details); 

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log ("Admin is logged in");
      setUser({
        firstName: details.firstName,
        lastName: details.lastName,
        email: details.email
      })
    } else {
      console.log("Details do not match!");
      setError("You've just entered incorrect information!")
    }
    //Later, we'll be setting our user or our error. For now we just console.log this.
  }

  //We're gonna need also a logout function:
  const Logout = () => {
    setUser({
      name: "",
      email: ""
    });
  }


  return (
    <>
      {(user.email !== "")
      ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout} className="btn">Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}

    </>
  )
}

export default LoginView

