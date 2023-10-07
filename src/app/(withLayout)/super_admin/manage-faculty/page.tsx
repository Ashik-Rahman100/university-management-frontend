import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button } from "antd";
import Link from "next/link";

const ManageStudentPage = () => {
  return (
    <div>
      <div>
        <UMBreadCrumb
          items={[
            {
              label: "super_admin",
              link: "/super_admin",
            },
          ]}
        />

        <ActionBar title="Faculty List">
          <Link href="/super_admin/manage-faculty/create">
            <Button type="primary">Create Student</Button>
          </Link>
        </ActionBar>
      </div>
    </div>
  );
};

export default ManageStudentPage;
