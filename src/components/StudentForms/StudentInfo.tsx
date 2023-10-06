"use client";

import {
  acDepartmentOptions,
  acSemesterOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";
import { Col, Row } from "antd";
import FormInputs from "../Forms/FormInputs";
import FormSelectField from "../Forms/FormSelectField";
import UploadImage from "../ui/UploadImage";

const StudentInfo = () => {
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
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInputs
            name="student.name.firstName"
            type="text"
            size="large"
            label="First Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInputs
            name="student.name.middleName"
            type="text"
            size="large"
            label="Middle Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInputs
            name="student.name.lastName"
            type="text"
            size="large"
            label="Last Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormInputs
            name="password"
            type="password"
            size="large"
            label="Password"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectField
            name="student.academicSemester"
            size="large"
            label="Academic Semester"
            options={acSemesterOptions}
            placeholder="Select"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectField
            name="student.academicDepartment"
            size="large"
            label="Academic Department"
            options={acDepartmentOptions}
            placeholder="Select"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectField
            name="student.academicFaculty"
            size="large"
            label="Academic Faculty"
            options={facultyOptions}
            placeholder="Select"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectField
            name="student.gender"
            size="large"
            label="Gender"
            options={genderOptions}
            placeholder="Select"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <UploadImage />
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;
