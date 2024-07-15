import Admin from "./Admin/Admin";
import Agent from "./Agent/Agent";
import User from "./User/User";

const Dashboard = () => {
  let role = "agent";

  return (
    <>
      {role === "user" && <User />}
      {role === "admin" && <Admin />}
      {role === "agent" && <Agent />}
    </>
  );
};

export default Dashboard;
