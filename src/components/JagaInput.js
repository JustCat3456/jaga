import React from 'react';
import TextField from '@mui/material/TextField';

function JagaInput({ value, onChange }) {
  return (
    <TextField
      label="じゃがりこの値段"
      variant="outlined"
      value={value}
      onChange={onChange}
    />
  );
}

export default JagaInput;
