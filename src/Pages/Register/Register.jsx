/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [error, setError] = useState("");
  

  const {  profileUpdate } = useContext(AuthContext);
  
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
    

    console.log(name,photo,password,email);
   
    setError("");
    createUser(email, password)
    .then(result =>{
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
  }
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
       
      <div className="w-11/12 md:w-7/12 lg:w-5/12 mx-auto my-8 p-8 rounded-md sm:p-10 bg-secondary text-neutral">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Register</h1>
      </div>
      <form
        onSubmit={handleSignUp}
        noValidate=""
        action=""
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm" required>
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-secondary text-neutral"
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
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-secondary text-neutral"
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
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-secondary text-neutral"
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
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-secondary text-neutral"
            />
          </div>
        </div>
        <small>
          <p className="text-error mt-2">{error.split("Firebase:")}</p>
        </small>
        <div className="space-y-2 mt-0">
          <div className="flex items-center -mt-8">
            <input
              type="checkbox"
              onClick={handleAccepted}
              className="checkbox checkbox-neutral rounded cursor-pointer h-4 w-4 mr-2"
            />
            <span className="label-text pb-px">
              Accept our{" "}
              <Link className="text-primary hover:underline">
                terms and conditions
              </Link>
            </span>
          </div>

          <div className="-mt-8">
            <button
                disabled={!accepted}
              type="submit"
              className="w-full px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-gradient-to-r from-blue-400 to-purple-500  disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Register
            </button>
          </div>
          <p className="px-6 text-sm text-center text-neutral">
            Already have an account? <br />
            <Link rel="noopener noreferrer" to="/login" className="underline">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
    
    );
};

export default Register;
