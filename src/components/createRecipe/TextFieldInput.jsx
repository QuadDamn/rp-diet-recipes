import { Grid, TextField } from '@material-ui/core';
import React from 'react';

const TextFieldInput = ({
  gridItemSize,
  fieldName,
  fieldLabel,
  fieldValue,
  handleFieldChange,
  fieldError,
  isMultiLine,
}) => {
  return (
    <Grid item xs={gridItemSize}>
      {isMultiLine ? (
        <TextField
          multiline
          rows={3}
          rowsMax={6}
          variant="outlined"
          margin="normal"
          fullWidth
          id={fieldName}
          label={fieldLabel}
          name={fieldName}
          value={fieldValue}
          onChange={handleFieldChange}
          helperText={fieldError}
          error={!!fieldError}
        />
      ) : (
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id={fieldName}
          label={fieldLabel}
          name={fieldName}
          value={fieldValue}
          onChange={handleFieldChange}
          helperText={fieldError}
          error={!!fieldError}
        />
      )}
    </Grid>
  );
};

export default TextFieldInput;
