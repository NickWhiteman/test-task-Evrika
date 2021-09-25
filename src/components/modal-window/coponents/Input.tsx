import React, { forwardRef } from "react";
import { TextField } from '@material-ui/core';

export const Input: React.ForwardRefExoticComponent<React.RefAttributes<any>> = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      type='text'
      {...props}
    />
  );
});