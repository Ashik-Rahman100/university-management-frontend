"use client";

import Form from "@/components/Forms/Form";
import FormInputs from "@/components/Forms/FormInputs";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};
const EditDepartmentPage = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useDepartmentQuery(id);
  console.log(data);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const defaultValue = { title: data?.title || "" };
  const onSubmit = async (values: { title: string }) => {
    message.loading("department Updating ...");
    try {
      await updateDepartment({ id, body: values });
      message.success("Department Updated successfully");
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "department",
            link: "/super_admin/department",
          },
        ]}
      />
      <ActionBar title="Update Department"></ActionBar>
      <Form submitHandler={onSubmit} defaultValues={defaultValue}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInputs name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update Department
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;
