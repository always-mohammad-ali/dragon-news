import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form className="fieldset">

            {/* NAME */}
            <label className="label">Name</label>
            <input
              type="input"
              name="name"
              className="input"
              placeholder="Enter Your Name"
            />

            {/* PHOTO URL */}
            <label className="label">Photo Url</label>
            <input
              type="input"
              name="photoUrl"
              className="input"
              placeholder="Photo URL"
            />

            {/* EMAIL */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />

            {/* PASSWORD */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
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
