import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/authProvider";

const Login = () => {
  
  const {logInUser} = use(AuthContext);

  const handleLogin=(e)=>{
    e.preventDefault();
    
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
    .then((result) =>{
      const user = result.user;
      console.log(user)
    })
    .catch((error)=>{
      console.log(error)
      alert(error.message)
    })
    
  }
  
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">

            {/* EMAIL SECTION */}
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />

            {/* PASSWORD SECTION */}
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />

            <div>

              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="text-secondary my-3">Don't Have an Account? <Link className="text-accent font-semibold hover:underline" to="/auth/register"> Register Now!</Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
