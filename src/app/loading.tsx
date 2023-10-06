import { Row, Space, Spin } from "antd";

const Loading = () => {
  return (
    <div>
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    </div>
  );
};

export default Loading;
