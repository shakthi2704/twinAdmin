import React from "react"
import { Link } from "react-router-dom"
import { logoSm } from "../../assets/images"

const Login = () => {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full  m-auto bg-white dark:bg-slate-800/60 rounded shadow-lg ring-2 ring-slate-300/50 dark:ring-slate-700/50 lg:max-w-md">
        <div className="text-center p-6 bg-slate-900 rounded-t">
          <Link to="/">
            <img src={logoSm} alt="" className="w-14 h-14 mx-auto mb-2" />
          </Link>
          <h3 className="font-semibold text-white text-xl mb-1">
            Let's Get Started T-Wind
          </h3>
          <p className="text-xs text-slate-400">
            Sign in to continue to T-Wind.
          </p>
        </div>
        <form className="p-6">
          <div>
            <label className="label">Email</label>

            <input
              type="email"
              id="email"
              className="form-control dark:bg-slate-800/60 dark:border-slate-700/50 "
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mt-4">
            <label className="label">Your password</label>
            <input
              type="password"
              id="password"
              className="form-control dark:bg-slate-800/60 dark:border-slate-700/50"
              placeholder="Password"
              required
            />
          </div>
          <Link to="/" className="text-xs text-gray-600 hover:underline">
            Forget Password?
          </Link>
          <div className="block mt-3">
            <label className="custom-label">
              <div className="bg-white dark:bg-slate-700 dark:border-slate-600 border border-slate-200 rounded w-4 h-4  inline-block leading-4 text-center -mb-[3px]">
                <input type="checkbox" className="hidden" />
                <i className="fas fa-check hidden text-xs text-slate-700 dark:text-slate-300"></i>
              </div>
              <span className=" ml-2 text-sm text-slate-500 font-medium">
                Remember me
              </span>
            </label>
          </div>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Login
            </button>
          </div>
        </form>
        <p className="mb-5 text-sm font-medium text-center text-slate-500">
          Don't have an account?
          <Link
            to="/dashboard"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
