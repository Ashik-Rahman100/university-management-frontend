"use client";

import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type SelectOptions = {
  value: string;
  label: string;
};

interface SelectFormField {
  options: SelectOptions[];
  name: string;
  defaultValue?: SelectOptions;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  label?: string;
  placeholder?: string;
}
const FormSelectField = ({
  name,
  size,
  value,
  label,
  options,
  defaultValue,
  placeholder,
}: SelectFormField) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            options={options}
            value={value}
            size={size}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
