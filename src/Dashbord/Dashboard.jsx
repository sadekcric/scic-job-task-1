import { useContext, useEffect, useState } from "react";
import Admin from "./Admin/Admin";
import Agent from "./Agent/Agent";
import User from "./User/User";
import { AuthContext } from "../Router/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState("");

  useEffect(() => {
    setRole(user?.role);
  }, [user]);

  return (
    <>
      {role === "user" && <User />}
      {role === "admin" && <Admin />}
      {role === "agent" && <Agent />}
    </>
  );
};

export default Dashboard;
