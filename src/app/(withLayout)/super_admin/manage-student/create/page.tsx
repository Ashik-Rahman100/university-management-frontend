"use client";

import StepperForm from "@/components/StepperForm/StepperForm";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForms/LocalGuardianInfo";
import StudentBasicInfo from "@/components/StudentForms/StudentBasicInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";

const CreateStudent = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Student Basic Info",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardiant Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardiant Information",
      content: <LocalGuardianInfo />,
    },
  ];
  const handleStudentSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 style={{ marginBottom: "10px" }}>Create Students</h1>
      <StepperForm
        submitHandler={(value) => handleStudentSubmit(value)}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudent;
