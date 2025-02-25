import { TextField } from "@mui/material";
import React from "react";
import style from "./input.module.css";

const Input = ({
  lable,
  width,
  register,
  feildName,
  pattern,
  errors,
  getValues,
}) => {
  return (
    <>
      <TextField
        className={style.input}
        variant="outlined"
        label={lable}
        {...register(feildName, {
          pattern: { value: pattern, message: `Invalid  ${feildName}` },
          required: { value: true, message: `${feildName} Required ` },
        })}
        error={errors[feildName]}
        sx={{
          width: width,
          input: {
            alignContent: "center",
            height: "39px",
            padding: "7px",
            color: "#808080",
            fontWeight: "light",
          },
        }}
      ></TextField>
      {errors[feildName] && (
        <p style={{ color: "red" }}>{errors[feildName].message}</p>
      )}
    </>
  );
};

export default Input;
