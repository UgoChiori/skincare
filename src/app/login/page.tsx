import React from "react";

export default function Login(): JSX.Element {
  return (
    <div className="mt-[200px] flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-8 w-[400px]">
        <p className="font-bold text-center uppercase text-3xl mb-4">Login</p>
        <form className="flex flex-col">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-4 py-2 mb-4"
            placeholder="Username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-4 py-2 mb-4"
            placeholder="Password"
          />
          <div className="flex justify-between items-center">
            <span className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-4 py-2 mb-4"
              />
              <label htmlFor="rememberMe" className="ml-2">
                Remember me
              </label>
            </span>
            <a href="#" className="text-[#f9a8d4]">
              Forgot password?
            </a>
          </div>
          <button className="bg-[#f9a8d4] text-slate-800 font-bold uppercase text-1xl lg:text-[20px] w-24 h-12 md:w-20 md:h-10 hover:bg-slate-800 hover:text-[#f9a8d4] ease-in duration-300 m-auto rounded-md">
            Login
          </button>
          <p className="text-center mt-4">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-[#f9a8d4]">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
