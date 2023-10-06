import { bloodGroupOptions } from "@/constants/global";
import { Col, Row } from "antd";
import FormDatePicker from "../Forms/FormDatePicker";
import FormInputs from "../Forms/FormInputs";
import FormSelectField from "../Forms/FormSelectField";
import FormTextArea from "../Forms/FormTextArea";

const StudentBasicInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInputs
            name="student.email"
            type="email"
            size="large"
            label="Email"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInputs
            name="student.contactNo"
            type="text"
            size="large"
            label="Contact Number"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInputs
            name="student.emergencyContactNo"
            type="text"
            size="large"
            label="Emergency Contact Number"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormDatePicker
            name="student.dateOfBirth"
            label="Date Of Birth"
            size="large"
          />
        </Col>

        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectField
            name="student.bloodGroup"
            size="large"
            label="Blood Group"
            options={bloodGroupOptions}
            placeholder="Select"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInputs
            name="student.designation"
            type="text"
            size="large"
            label="Designation"
          />
        </Col>
        <Col span={12} style={{ margin: "10px 0" }}>
          <FormTextArea
            name="student.presentAddress"
            label="Present address"
            rows={4}
          />
        </Col>

        <Col span={12} style={{ margin: "10px 0" }}>
          <FormTextArea
            name="student.permanentAddress"
            label="Permanent address"
            rows={4}
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentBasicInfo;
