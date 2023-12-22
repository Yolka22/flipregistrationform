// CardFront.js
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from "@mui/joy";
import { useForm } from "react-hook-form";

const CardFront = ({ handleFlip }) => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <Box>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input type="text" {...register("username")} />
      </FormControl>
      <FormControl>
        <FormLabel>Password:</FormLabel>
        <Input
          type={showPassword ? 'text' : 'password'}
          {...register("password")}
        />
      </FormControl>
      <Button
        sx={{ marginTop: "10px", width: "100%" }}
        onClick={handleSubmit(handleLoginSubmit)}
      >
        Login
      </Button>
      <Button
        variant='plain'
        sx={{ width: "100%", marginTop: "10px" }}
        onClick={handleFlip}
      >
        Don't have an account?
      </Button>
      <Button
        variant='plain'
        sx={{ width: "100%", marginTop: "10px" }}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? 'Hide Password' : 'Show Password'}
      </Button>
    </Box>
  );
};

export default CardFront;