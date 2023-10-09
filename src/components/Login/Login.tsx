"use client";

import loginImg from "@/assets/Computer login-amico.png";
import Form from "@/components/Forms/Form";
import FormInputs from "@/components/Forms/FormInputs";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};
const Login = () => {
  // console.log(getUserInfo());
  const router = useRouter();

  const [userLogin] = useUserLoginMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log(res);
      if (res?.accessToken) {
        router.push("/profile");
        message.success("User Login successfully");
      }

      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col sm={24} md={16} lg={12}>
        <Image width={500} src={loginImg} alt="login-image" />
      </Col>
      <Col sm={24} md={8} lg={8}>
        <div>
          <h1 style={{ margin: "15px 0px" }}>Login Your Account</h1>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInputs name="id" type="text" size="large" label="User ID" />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <FormInputs
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
