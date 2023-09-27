"use client";

import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  id?: string;
  size?: "large" | "small";
  placeholder?: string;
  validation?: object;
  value?: string | string[] | undefined;
  label?: string;
}
const FormInputs = ({
  name,
  type,
  id,
  size,
  placeholder,
  validation,
  value,
  label,
}: IInput) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            type={type}
            size={size}
            placeholder={placeholder}
            {...field}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default FormInputs;
