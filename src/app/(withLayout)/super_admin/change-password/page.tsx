"use client";

import Form from "@/components/Forms/Form";
import FormInputs from "@/components/Forms/FormInputs";
import { Button } from "antd";

const ResetPasswordPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{ margin: "100px 0", display: "flex", justifyContent: "center" }}
    >
      <Form submitHandler={onSubmit}>
        <h3 style={{ marginBottom: "10px" }}>Reset Password</h3>
        <div style={{ margin: "5px 0" }}>
          <FormInputs name="oldPassword" label="Old password" type="password" />
        </div>
        <div style={{ margin: "5px 0" }}>
          <FormInputs name="newPassword" label="New password" type="password" />
        </div>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form>
    </div>
  );
};

export default ResetPasswordPage;
