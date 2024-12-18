import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface DropDownProps {
  label: string;
  value: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange?: any;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  menuItems: {
    label: string;
    value: string | number;
  }[];
}

const DropDown = (props: DropDownProps) => {
  const {
    label,
    value,
    handleChange,
    menuItems,
    disabled,
    fullWidth,
    className,
  } = props;
  return (
    <FormControl fullWidth={fullWidth} className={className}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
        disabled={disabled}
      >
        {menuItems.map((singleItem) => (
          <MenuItem value={singleItem.value} key={singleItem.value}>
            {singleItem.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;
