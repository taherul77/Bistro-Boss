/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProvider";
import img from "../../assets/others/authentication2.png"
import "./login.css"

const Login = () => {

    const { signIn,logInWithGoogle,logInWithGithub } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    useEffect(()=>{
      loadCaptchaEnginge(6); 
    })

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    
        signIn(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError("");
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
          });
      };
      const handleGoogleSignIn = () => {
        logInWithGoogle(googleProvider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            const saveUser = { displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL, }
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
          })
              .then(res => res.json())
              .then(data => {
                  if (data.insertedId) {
                    setError("");
                   
                    
                      
                  }
              })
              navigate(from, { replace: true });
            
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
          });

      };
      const handleGithubSignIn = () => {
        logInWithGithub(githubProvider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setError("");
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error(error);
            setError(error.message);
          });
      };
  return (
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
                  onSubmit={handleSignIn}
                  noValidate=""
                  action=""
                  className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 rounded-md border border-gray-700  text-neutral"
                      required
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 rounded-md border border-gray-700  text-neutral"
                      required
                    />
                    <div className="flex justify-end text-xs">
                      <a rel="noopener noreferrer" href="/">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block">
                    <LoadCanvasTemplate />
                    </label>
                    <input
                      type="text"
                      name="captcha"
                      id="captcha"
                      placeholder="captcha"
                      className="w-full px-4 py-3 rounded-md border border-gray-700  text-neutral"
                     
                    />
                    
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
                  <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    G
                  </button>
                </div>
                <p className="text-xs text-center sm:px-6">
                  Do not have an account? <br />
                  <Link
                    rel="noopener noreferrer"
                    to="/register"
                    className="underline hover:text-primary"
                  >
                    Register Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Login;
