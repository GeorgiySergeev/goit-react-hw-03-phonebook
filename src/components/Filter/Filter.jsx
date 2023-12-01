import { Input } from './Filer.styled';

export const Filter = ({ onFilterInputChange }) => {
  return (
    <>
      <p
        style={{
          fontSize: '1.1rem',
          marginBottom: 8,
        }}
      >
        Find contact by name
      </p>
      <Input
        type="text"
        placeholder="Enter name..."
        onChange={onFilterInputChange}
      />
    </>
  );
};
