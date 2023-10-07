import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
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
    </div>
  );
};

export default DepartmentPage;
