export type InputWithLabelProps = {
  id: string;
  label: string;
  value: string;
  type?: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};