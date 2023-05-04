import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
    const [user, setUser] = useState({});

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    
      const navigate = useNavigate()

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/auth/login", data)
      .then((response) => {
        setUser(response.data.user)
        localStorage.setItem("user_token_greater", response.data.token)
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
     <form onSubmit={handleSubmit(onSubmit)}>

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

      <input type="submit" value="Log In" />
    </form>
  )
}

export default Login