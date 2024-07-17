import { useContext } from "react";
import { AuthContext } from "../../Router/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const SendMoney = () => {
  const { user } = useContext(AuthContext);

  if (user?.role !== "user") {
    return;
  }

  const handleSendMoney = (e) => {
    e.preventDefault();
    const form = e.target;
    const receiverPhone = form.phone.value;
    const pin = form.pin.value;

    let balance = form.balance.value;
    console.log(balance);

    if (balance > user.balance) {
      return toast.error("You have no enough Balance!");
    }

    if (balance < 50) {
      return toast.error("Send Money Start up to 50 taka!");
    }

    if (balance > 100) {
      balance -= 5;
    }

    const updateFile = { receiverPhone, pin, balance };

    axios
      .put(`http://localhost:5000/send-money/${user.phone}`, updateFile)
      .then((res) => {
        // console.log(res.data);
        if (res.data) {
          axios.get(`http://localhost:5000/user?phone=${user.phone}&pin=${pin}`).then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data));
          });
          return toast.success("Send money Successful!");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="w-4/5 mx-auto mt-10">
      <h4 className="text-center pb-5 font-semibold text-xl">Send Money</h4>
      <form onSubmit={handleSendMoney}>
        <Toaster position="top-center" reverseOrder={false} />
        <input type="number" name="phone" placeholder="Mobile No" className="p-2 w-full rounded-md text-gray-700 mb-5" required />
        <input type="number" name="balance" placeholder="Taka" className="p-2 w-full rounded-md text-gray-700" required />
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
          Send Money
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

export default SendMoney;
