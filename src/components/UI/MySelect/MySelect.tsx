type MySelectProps = {
  defaultValue: string;
  options: OptionProps[];
  value: string;
  onChange: (value: string) => void;
}
type OptionProps = {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: CompanyProps;
  address: AddressProps;
}
type CompanyProps = {
  name: string;
  catchPhrase: string;
  bs: string;
}
type AddressProps = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoProps;
}
type GeoProps = {
  lat: string;
  lng: string;
}

export const MySelect = ({ options, defaultValue, value, onChange }: MySelectProps) => {
  return (
    <select value={value} onChange={(event) => (
      console.log('event.target.value =', event.target.value),
      onChange(event.target.value))}>
      <option value="All">{defaultValue}</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.id} - {option.name}
        </option>
      ))}
    </select>
  );
}