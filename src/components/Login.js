import { useRef, useState } from "react";
import { validateFormData } from "../utils/validateFormData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const validateForm = () => {
    const message = isSignInForm
      ? validateFormData(null, email.current.value, password.current.value)
      : validateFormData(
          name.current.value,
          email.current.value,
          password.current.value
        );
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          //navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          className=""
          alt="bg-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-3/12 absolute p-12 bg-black bg-opacity-85 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-8"
        >
          <h1 className="text-3xl font-extrabold text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              className="p-4 my-4 w-full border-gray-300 border bg-transparent rounded-sm"
              type="text"
              placeholder="Full Name"
            ></input>
          )}
          <input
            ref={email}
            className="p-4 my-4 w-full border-gray-300 border bg-transparent rounded-sm"
            type="text"
            placeholder="Email"
          ></input>
          <input
            ref={password}
            className="p-4 my-4 w-full border-gray-300 border bg-transparent rounded-sm"
            type="password"
            placeholder="Password"
          ></input>
          <p className="py-2 text-red-600 font-bold">{errorMessage}</p>
          <button
            className="bg-red-700  hover:bg-red-800 rounded-lg p-4 w-full"
            onClick={validateForm}
          >
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
