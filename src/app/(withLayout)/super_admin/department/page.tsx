"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      //   sorter: true,
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <Button onClick={() => console.log(data)} type="primary" danger>
            X
          </Button>
        );
      },
    },
  ];
  const data = [
    {
      key: "1",
      name: "Imran Brown",
      age: 32,
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
    },
  ];
  const onPageSizeChange = (page: number, pageSize: number) => {
    console.log("page: ", page + " page size: ", pageSize);
  };
  const onTableChange = (pagination: any, filters: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />

      <ActionBar title="Department List">
        <Link href="/super_admin/department/create">
          <Button type="primary">Create Student</Button>
        </Link>
      </ActionBar>
      <UMTable
        columns={columns}
        dataSource={data}
        loading={false}
        pageSize={5}
        totalPage={20}
        showSizeChanger={true}
        onPaginationChange={onPageSizeChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default DepartmentPage;
