import { DatePicker, DatePickerProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

interface UMDatePickerProps {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  value?: Dayjs;
  label?: string;
  size?: "large" | "small";
}
const FormDatePicker = ({ name, label, onChange, size }: UMDatePickerProps) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    console.log(date, dateString);
  };
  return (
    <>
      {label ? label : null}
      <br />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            onChange={handleOnChange}
            value={dayjs(field.value) || ""}
            size={size}
            style={{ width: "100%" }}
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;
