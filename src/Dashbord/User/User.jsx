import wallet from "../../assets/wallet.png";
import send from "../../assets/send.png";
import cashout from "../../assets/takeover.png";
import history from "../../assets/history-book.png";
import cashIn from "../../assets/cash-flow.png";
import Card from "../../CommonRoute/Card";
import { Link, useNavigate } from "react-router-dom";
import logout from "../../assets/logOut.png";

const User = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      {/* card */}
      <section className="grid grid-cols-2 gap-x-5 gap-y-10 mt-10 ">
        {/* Balance */}
        <Link to={"/balance"}>
          <Card img={wallet} title={"Balance"} />
        </Link>

        {/* send Money */}
        <Link to={"/send-money"}>
          <Card img={send} title={"send money"} />
        </Link>

        {/* Cash Out */}
        <Link to={"/cash-out"}>
          <Card img={cashout} title={"Cash out"} />
        </Link>

        {/* Cash in */}
        <Link to={"/cash-in"}>
          <Card img={cashIn} title={"cash in"} />
        </Link>

        {/* History */}
        <div className="col-span-2">
          <Link to={"/user-history"}>
            <Card img={history} title={"History"} />
          </Link>
        </div>

        <div
          onClick={handleLogout}
          className="fixed bottom-5 left-[50%] -translate-x-[50%] bg-transparent shadow-md shadow-white border-t border-white border-opacity-20 rounded-full p-3 w-16"
        >
          <img src={logout} alt="" />
        </div>
      </section>
    </>
  );
};

export default User;
