import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface TextAreaProps {
  name: string;
  placeholder?: string;
  value?: string;
  label?: string;
  rows?: number;
}
const FormTextArea = ({
  name,
  placeholder,
  value,
  label,
  rows,
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </>
  );
};

export default FormTextArea;
