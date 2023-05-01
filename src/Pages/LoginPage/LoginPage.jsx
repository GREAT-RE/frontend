import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./LoginPage.css";

 function Login() {
  const [login, setLogin] = useState({});
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const onSubmitLogin= (data) => setLogin(data);

  return (
    <form onSubmit={handleSubmit(onSubmitLogin)}>
      <input
        {...register("email", { required: "e-mail is missing" })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email && <p role="alert">{errors.email?.message}</p>}

      <input
        {...register("password", { required: "password is missing" })}
        aria-invalid={errors.password ? "true" : "false"}
      />
      {errors.password && <p role="alert">{errors.password?.message}</p>}

      <input type="submit" />
    </form>
  );
}

export default Login;
