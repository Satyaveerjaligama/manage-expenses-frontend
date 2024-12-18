import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";

interface DatePickerProps {
  label: string;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const DatePicker = (props: DatePickerProps) => {
  const { label, className, disabled, fullWidth } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <MuiDatePicker
          sx={{ ...(fullWidth && { width: "100%" }) }}
          className={className}
          disabled={disabled}
          label={label}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DatePicker;
