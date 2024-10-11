import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  return (
    <>
      <div className="absolute">
        <img
          className=""
          alt="bg-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
        />
      </div>
      <div>
        <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-8">
          <h1 className="text-2xl font-extrabold text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              className="p-4 my-4 w-full border-gray-300 border bg-transparent rounded-sm"
              type="text"
              placeholder="Full Name"
            ></input>
          )}
          <input
            className="p-4 my-4 w-full border-gray-300 border bg-transparent rounded-sm"
            type="text"
            placeholder="Email"
          ></input>
          <input
            className="p-4 my-4 w-full border-gray-300 border bg-transparent rounded-sm"
            type="text"
            placeholder="Password"
          ></input>
          <button className="bg-red-700 rounded-lg p-4 w-full">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <h2
            className="hover:underline cursor-pointer pt-6"
            onClick={() => setIsSignInForm(!isSignInForm)}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </h2>
        </form>
      </div>
    </>
  );
};

export default Login;
