// CardBack.js
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from "@mui/joy";
import { useForm } from "react-hook-form";

const CardBack = ({ handleFlip }) => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterSubmit = (data) => {
    console.log("Register Data:", data);
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
      <FormControl>
        <FormLabel>Confirm Password:</FormLabel>
        <Input
          type={showPassword ? 'text' : 'password'}
          {...register("confirmPassword")}
        />
      </FormControl>
      <Button
        sx={{ marginTop: "10px", width: "100%" }}
        onClick={handleSubmit(handleRegisterSubmit)}
      >
        Register
      </Button>
      <Button
        variant='plain'
        sx={{ width: "100%", marginTop: "10px" }}
        onClick={handleFlip}
      >
        Already have an account?
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

export default CardBack;