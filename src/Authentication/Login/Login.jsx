import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white bg-opacity-30 shadow">
            <h2 className="text-center text-2xl font-bold">Sign in</h2>
            <form className="mt-8 space-y-4">
              {/* Phone Number */}
              <div>
                <label className=" text-sm mb-2 block">Phone no</label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#E2126D]"
                    placeholder="Enter user name"
                  />
                </div>
              </div>

              {/* Pin Number */}
              <div>
                <label className=" text-sm mb-2 block">Pin Number</label>
                <div className="relative flex items-center">
                  <input
                    name="pin"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#E2126D]"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg  bg-white bg-opacity-10 hover:bg-gray-100 hover:bg-opacity-20 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <p className=" text-sm !mt-8 text-center">
                Don't have an account?{" "}
                <Link to={"/register"} className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
