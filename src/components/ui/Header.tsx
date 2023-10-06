import { authKey } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;
const Header = () => {
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const { role } = getUserInfo() as any;
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  return (
    <div>
      <AntHeader style={{ background: "#ffffff" }}>
        <Row style={{ height: "100%" }} justify="end" align="middle">
          <p
            style={{
              margin: "0px 5px",
            }}
          >
            {role}
          </p>
          <Dropdown menu={{ items }}>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </Dropdown>
        </Row>
      </AntHeader>
    </div>
  );
};

export default Header;
