/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import img from "../../assets/others/authentication2.png";
import "../Login/login.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const { profileUpdate } = useContext(AuthContext);

  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, password, email);

    setError("");
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
        handleUserProfile(name, photo);
        navigate("/login");
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleUserProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    profileUpdate(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      
      <div className=" login-item hero min-h-screen bg-base-200">
        <div className="hero-content border  flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div>
              <div className="p-8 space-y-3 rounded-xl  text-neutral">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form
                  onSubmit={handleSignUp}
                  noValidate=""
                  action=""
                  className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm"
                        required
                      >
                        Name
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="w-full px-3 py-2 border rounded-md border-gray-700  text-neutral"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@email.com  "
                        className="w-full px-3 py-2 border rounded-md border-gray-700 text-neutral"
                        required
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">
                          Password
                        </label>
                      </div>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="*****"
                        className="w-full px-3 py-2 border rounded-md border-gray-700 text-neutral"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="photo" className="block mb-2 text-sm">
                        Photo Link
                      </label>
                      <input
                        type="photo"
                        name="photo"
                        id="photo"
                        placeholder="Photo Link"
                        className="w-full px-3 py-2 border rounded-md border-gray-700 text-neutral"
                      />
                    </div>
                  </div>

                  <small>
                    <p className="text-error -mt-2">
                      {error.split("Firebase:")}
                    </p>
                  </small>
                  <button
                    type="submit"
                    className="block w-full p-3 text-center px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-gradient-to-r from-blue-400 to-purple-500"
                  >
                    Log in
                  </button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                  <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                  <p className="px-3 text-sm">Login with social accounts</p>
                  <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex flex-col justify-center lg:flex-row lg:justify-between">
                  <button className="btn btn-circle btn-outline">G</button>
                </div>
                <p className="text-xs text-center sm:px-6">
                  Do not have an account? <br />
                  <Link
                    rel="noopener noreferrer"
                    to="/login"
                    className="underline hover:text-primary"
                  >
                    Login Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
