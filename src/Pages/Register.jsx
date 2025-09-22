import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/authProvider";
// import { updateProfile } from "firebase/auth";

const Register = () => {

  const {createUser, setUser, updateUserProfile} = use(AuthContext)
  const [nameError, setNameError] = useState("")

  const handleRegister = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    if(name.length < 5){
      setNameError("Name should be more than 5 characters.");
      return;
    }
    else{
        setNameError("")
    }

    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({name, photoUrl, email, password})

    createUser(email, password)
    .then((result) =>{
      const user = result.user;

      updateUserProfile({displayName:name , photoURL: photoUrl})
      .then( () => {
        setUser({ ...user, displayName:name , photoURL: photoUrl})
      })
      .catch((error)=>{
        console.log(error)
        setUser(user)
      })

      
      // console.log(user)
    })

    .catch((error) =>{
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage)
    })
    
  }
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">

            {/* NAME */}
            <label className="label">Name</label>
            <input
              type="input"
              name="name"
              className="input"
              placeholder="Enter Your Name"
              required
            />
            {
              nameError && <p className="text-red-600 text-xs">{nameError}</p>
            }

            {/* PHOTO URL */}
            <label className="label">Photo Url</label>
            <input
              type="url"
              name="photoUrl"
              className="input"
              placeholder="Photo URL"
              required
            />

            {/* EMAIL */}

            <label className="label">Email</label>

            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* PASSWORD */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="text-secondary my-3">
              Already Have an Account?{" "}
              <Link
                className="text-accent font-semibold hover:underline"
                to="/auth/login"
              >
                {" "}
                Login Now!
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
