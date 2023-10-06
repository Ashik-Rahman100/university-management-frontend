import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageStudentPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <div>
        <UMBreadCrumb
          items={[
            {
              label: `${role}`,
              link: `/${role}`,
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
