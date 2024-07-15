import Card from "../../CommonRoute/Card";
import userManagement from "../../assets/userManagement.png";
import system from "../../assets/system-monitoring.png";

const Admin = () => {
  return (
    <section className="grid grid-cols-2 gap-x-5 gap-y-10 mt-10 ">
      <Card img={userManagement} title={"User Management"} />
      <Card img={system} title={"System Monitoring"} />
    </section>
  );
};

export default Admin;
