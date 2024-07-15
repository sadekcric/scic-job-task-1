import wallet from "../../assets/wallet.png";
import send from "../../assets/send.png";
import cashout from "../../assets/takeover.png";
import history from "../../assets/history-book.png";
import cashIn from "../../assets/cash-flow.png";
import Card from "../../CommonRoute/Card";

const User = () => {
  return (
    <>
      {/* card */}
      <section className="grid grid-cols-2 gap-x-5 gap-y-10 mt-10 ">
        {/* Balance */}
        <Card img={wallet} title={"Balance"} />

        {/* send Money */}
        <Card img={send} title={"send money"} />

        {/* Cash Out */}
        <Card img={cashout} title={"Cash out"} />

        {/* Cash in */}
        <Card img={cashIn} title={"cash in"} />

        {/* History */}
        <div className="col-span-2">
          <Card img={history} title={"History"} />
        </div>
      </section>
    </>
  );
};

export default User;
