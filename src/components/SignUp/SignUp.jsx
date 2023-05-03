import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form";
import axios from "axios";

const SignUp = () => {
  const [userRegister, setUserRegister] = useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = (data) => {
    if(data.client_type === undefined || data.client_type === null){
        data.client_type = "s"
    }
    axios
      .post("http://localhost:5000/auth/sign-up", data)
      .then((response) => {
        navigate("/register/login")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        name="firstName"
        {...register("firstName", { required: "falta preencher o firstName" })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName && <p role="alert">{errors.firstName?.message}</p>}

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        name="lastName"
        {...register("lastName", { required: "falta preencher o lastName" })}
        aria-invalid={errors.lastName ? "true" : "false"}
      />
      {errors.lastName && <p role="alert">{errors.lastName?.message}</p>}

      <label htmlFor="email">Email:</label>

      <input
        type="email"
        name="email"
        {...register("email", { required: "falta preencher o email" })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email && <p role="alert">{errors.email?.message}</p>}

      <label htmlFor="password">Password:</label>

      <input
        type="password"
        name="password"
        {...register("password", { required: "falta preencher o password" })}
        aria-invalid={errors.password ? "true" : "false"}
      />
      {errors.password && <p role="alert">{errors.password?.message}</p>}

      <input type="submit" value="Register" />
    </form>
  );
};

export default SignUp;
