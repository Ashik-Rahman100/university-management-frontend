"use client";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { Button, Steps, message } from "antd";
import { useRouter } from "next/router";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface IStep {
  title?: string;
  content?: ReactNode | ReactElement;
}

interface IStepperFormSteps {
  steps: IStep[];
  submitHandler: (value: any) => void;
  navigateLink?: string;
}
const StepperForm = ({
  steps,
  submitHandler,
  navigateLink,
}: IStepperFormSteps) => {
  const router = useRouter();
  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step") as string).step)
      : 0
  );
  useEffect(() => {
    setToLocalStorage("step", JSON.stringify({ step: current }));
  }, [current]);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const handleStudentOnSubmit = (data: any) => {
    submitHandler(data);
    reset();
    setToLocalStorage("step", JSON.stringify({ step: 0 }));
    if (navigateLink) {
      router.push(navigateLink);
    }
  };

  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleStudentOnSubmit)}>
          <div style={{ margin: "20px 0px" }}>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default StepperForm;
