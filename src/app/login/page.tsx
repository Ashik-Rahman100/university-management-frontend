import Login from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UM System Login",
};

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
