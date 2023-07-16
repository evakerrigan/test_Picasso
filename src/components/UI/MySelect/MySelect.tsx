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
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="All">{defaultValue}</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.id} - {option.name}
        </option>
      ))}
    </select>
  );
};
