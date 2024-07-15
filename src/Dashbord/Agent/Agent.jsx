import Card from "../../CommonRoute/Card";
import transaction from "../../assets/transaction.png";
import enquiry from "../../assets/blnc-inquery.png";

const Agent = () => {
  return (
    <section className="grid grid-cols-2 gap-x-5 gap-y-10 mt-10 ">
      <Card img={transaction} title={"Transaction Management"} />
      <Card img={enquiry} title={"Balance Enquiry"} />
    </section>
  );
};

export default Agent;
