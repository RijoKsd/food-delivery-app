import { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("SignUp");
  return (
    <div className="login-popup fixed z-10 w-full h-screen bg-[#00000090] grid">
      <form className="login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 rounded-lg animate-fadeIn font-sm">
        <div className="login-popup-title flex justify-between items-center text-black">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt="close icon"
            onClick={() => setShowLogin(false)}
            className=" w-4 cursor-pointer"
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5 ">
          {currentState === "SignUp" ? (
            <input
              type="text"
              placeholder="Your name"
              required
              className="outline-none border border-solid border-[#c9c9c9] p-2.5 rounded"
            />
          ) : null}
          <input
            type="email"
            placeholder="Your email"
            required
            className="outline-none border border-solid border-[#c9c9c9] p-2.5 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none border border-solid border-[#c9c9c9] p-2.5 rounded"
          />
        </div>
        <button className="border-none p-2.5 rounded text-white bg-tomato cursor-pointer text-base">
          {currentState === "SignUp" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition flex  items-start gap-2  ">
          <input type="checkbox" id="terms" required className=" mt-2"/>
          <label htmlFor="terms">
            I agree to the terms and conditions and privacy policy
          </label>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("SignUp")} className="text-tomato font-medium cursor-pointer">Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")} className="text-tomato font-medium cursor-pointer">Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
