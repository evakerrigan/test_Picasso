import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import { OptionProps } from "../../../types";

type MySelectProps = {
  defaultValue: string;
  options: OptionProps[];
  value: string;
  onChange: (value: string) => void;
};

export const MySelect = ({
  options,
  defaultValue,
  value,
  onChange,
}: MySelectProps) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Name</InputLabel>
      <Select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        input={<OutlinedInput label="Name" />}
      >
        <MenuItem value="All">{defaultValue}</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.id} - {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
