import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [pinmessage, setPinMessage] = useState("");

  const handleCreateUser = (e) => {
    e.preventDefault();
    // Number Verification
    if (isNaN(e.target.pin.value)) {
      return setPinMessage("PIN will only Number");
    } else {
      setPinMessage("");
    }

    if (e.target.pin.value.length !== 5) {
      return setPinMessage("PIN must be 5 Numbers");
    } else {
      setPinMessage("");
    }
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = parseInt(form.phone.value);
    const pin = parseInt(form.pin.value);
    const role = form.role.value;
    const status = "pending";

    const user = { name, email, phone, pin, role, status };

    axios
      .post("http://localhost:5000/users", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="">
      <div className=" flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white bg-opacity-30 shadow">
            <h2 className=" text-center text-2xl font-bold">Register</h2>
            <form onSubmit={handleCreateUser} className="mt-8 space-y-4">
              {/* Your Name */}
              <div>
                <label className=" text-sm mb-2 block">Your Name</label>

                <div className="relative flex items-center">
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#E2126D]"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className=" text-sm mb-2 block">Email</label>

                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#E2126D]"
                    placeholder="Enter user name"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className=" text-sm mb-2 block">Phone no:</label>

                <div className="relative flex items-center">
                  <input
                    name="phone"
                    type="number"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#E2126D]"
                    placeholder="Enter user name"
                  />
                </div>
              </div>

              {/* Pin Number */}
              <div>
                <label className="text-sm mb-2 block">Pin Number</label>
                <div className="relative flex items-center">
                  <input
                    name="pin"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#E2126D]"
                    placeholder="Enter password"
                  />
                </div>
                <p className="text-red-600 font-semibold">{pinmessage}</p>
              </div>

              {/* User Role */}
              <div>
                <label className="text-sm mb-2 block">Your Role</label>
                <select className="text-gray-700 w-full py-3 rounded-md px-3" name="role" id="" required>
                  <option value="">Select Role</option>
                  <option value="user">User</option>
                  <option value="agent">Agent</option>
                </select>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg  bg-white bg-opacity-10 hover:bg-gray-100 hover:bg-opacity-20 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <p className="text-sm !mt-8 text-center">
                Do not have an account?{" "}
                <Link to="/" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">
                  login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
