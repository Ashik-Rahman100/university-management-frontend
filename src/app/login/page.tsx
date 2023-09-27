"use client";

import loginImg from "@/assets/Computer login-amico.png";
import Form from "@/components/Forms/Form";
import FormInputs from "@/components/Forms/FormInputs";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {}
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

export default LoginPage;
