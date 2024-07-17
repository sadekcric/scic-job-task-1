import axios from "axios";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Router/AuthProvider";

const CashIn = () => {
  const { user } = useContext(AuthContext);
  const handleCashIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const agentNumber = form.phone.value;
    const requestBalance = form.balance.value;
    const pin = form.pin.value;

    const cashIn = { agentNumber, requestBalance, pin };

    axios
      .put(`http://localhost:5000/cash-in/${user.phone}`, cashIn)
      .then((res) => {
        // console.log(res.data);
        if (res.data) {
          axios.get(`http://localhost:5000/user?phone=${user.phone}&pin=${pin}`).then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data));
          });
          return toast.success("Cash In Request Successful!");
        }
      })
      .catch((err) => {
        return toast.error(err.response.data.message);
      });
  };

  return (
    <div className="w-4/5 mx-auto mt-10">
      <h4 className="text-center pb-5 font-semibold text-xl">Cash In</h4>
      <form onSubmit={handleCashIn}>
        <Toaster position="top-center" reverseOrder={false} />

        <input type="number" name="phone" placeholder="Agent Phone No" className="p-2 w-full rounded-md text-gray-700 mb-5" required />

        <input type="number" name="balance" placeholder="Request Taka" className="p-2 w-full rounded-md text-gray-700" required />

        <input type="password" name="pin" placeholder="pin" className="p-2 w-full rounded-md text-gray-700 mt-5" required />
        {/* <input
  type="number"
  value={fee}
  name="balance"
  placeholder="Fee"
  className="p-2 w-full bg-white rounded-md text-gray-700 mt-5"
  disabled
/> */}

        <button type="submit" className="p-2 bg-white bg-opacity-70 font-semibold w-full mt-5 rounded-md text-[#E2126D]">
          Cash in
        </button>
      </form>

      <div className="text-center">
        <Link className="py-2 px-4 rounded-md border-2 mt-10 inline-block border-white border-opacity-40 " to={"/dashboard"}>
          {" "}
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default CashIn;
