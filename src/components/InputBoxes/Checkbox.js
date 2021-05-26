import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

export default function InputCheckbox({ options, values, cb }) {
  const handleChange = (e) => {
    console.log(e.target.value);
    e.persist();
    cb && cb(e);
  };
  return (
    <div>
      {options.map((option, id) => {
        return (
          <FormControlLabel
            key={id}
            control={
              <Checkbox
                // checked={values[option.name]}
                name={option.name}
                color="primary"
                onChange={handleChange}
              />
            }
            label={option.label}
          />
        );
      })}
    </div>
  );
}
