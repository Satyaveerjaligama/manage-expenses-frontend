import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { FormHelperText } from "@mui/material";

interface DatePickerProps {
  label: string;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
  error?: boolean;
  helperText?: string;
}

const DatePicker = (props: DatePickerProps) => {
  const {
    label,
    className,
    disabled,
    fullWidth,
    value,
    onChange,
    error,
    helperText,
  } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <MuiDatePicker
          sx={{ ...(fullWidth && { width: "100%" }) }}
          className={className}
          disabled={disabled}
          label={label}
          value={value ? dayjs(value) : null}
          format="DD/MM/YYYY"
          onChange={onChange}
        />
      </DemoContainer>
      <FormHelperText error={error} className="date-picker-helper-text">
        {helperText}
      </FormHelperText>
    </LocalizationProvider>
  );
};

export default DatePicker;
