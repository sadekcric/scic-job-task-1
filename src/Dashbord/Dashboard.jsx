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
      {role === "user" && user?.status === "approve" && <User />}
      {role === "admin" && user?.status === "approve" && <Admin />}
      {role === "agent" && user?.status === "approve" && <Agent />}
    </>
  );
};

export default Dashboard;
