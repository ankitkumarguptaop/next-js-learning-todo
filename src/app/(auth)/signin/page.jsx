"use client"
import React from "react";
import Input from "../../../components/input/input";
import { Box, Button, Typography ,TextField} from "@mui/material";
import style from "./signin.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FormControl } from "@mui/material";
import google from "../../../assets/images/google.png";
import facebook from "../../../assets/images/facebook.png";
import apple from "../../../assets/images/apple.png";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormControl onSubmit={handleSubmit(onSubmit)}>
      <Box className={style["upper-texts"]}>
        <Typography sx={{ fontSize: "20px" }}>Welcome to SplitKaro</Typography>
        <Box className={style["signup-link"]}>
          <Typography sx={{ fontSize: "16px", color: "#8D8D8D" }}>
            No Account ?
          </Typography>
          <Link
            style={{
              color: "#B87514",
              fontSize: "16px",
              textDecoration: "none",
            }}
            href="/signup"
          >
            Sign up
          </Link>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontSize: "55px",
            marginLeft: "44px",
            fontWeight: "medium",
            marginBottom: "20px",
          }}
        >
          Sign in
        </Typography>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "16px", marginBottom: "10px" }}>
          Enter your username or email address
        </Typography>
    


    <Input lable={"Name"} register = {register} feildName ="Name"></Input>
    <Input lable={"Email"} register = {register} feildName ="Email" ></Input>
    <Input lable={"Age"} register = {register} feildName ="Age"></Input>
       

      </Box>

      <Button
onClick={handleSubmit(onSubmit)}
        sx={{
          color: "#FFFFFF",
          backgroundColor: "#E48700",
          width: "400px",
          height: "54px",
          borderRadius: "10px",
          textTransform: "none",
        }}
      >
        Sign in
      </Button>
      <Box
        sx={{
          color: "#ABABAB",
          fontSize: "16px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        OR
      </Box>
      <Box className={style["third-party-signin"]}>
        <img src={google} height="50px" width="250px" />
        <img src={facebook} height="50px" width="60px" />
        <img src={apple} height="50px" width="60px" />
      </Box>
    </FormControl>
  );
};

export default SignIn;
