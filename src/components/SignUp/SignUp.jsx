import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form";
import axios from "axios";
import "./SignUp.css"


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
    <div className="signup-form">
        <form onSubmit={handleSubmit(onSubmit)}>
      <label className='form-names' htmlFor="firstName">First Name:</label>
      <input
        type="text"
        name="firstName"
        {...register("firstName", { required: "First name is missing" })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName && <p className='error-message' role="alert">{errors.firstName?.message}</p>}

      <label className='form-names' htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        name="lastName"
        {...register("lastName", { required: "Last name is missing" })}
        aria-invalid={errors.lastName ? "true" : "false"}
      />
      {errors.lastName && <p className='error-message' role="alert">{errors.lastName?.message}</p>}

      <label className='form-names' htmlFor="email">E-mail:</label>

      <input
        type="email"
        name="email"
        {...register("email", { required: "E-mail is missing" })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email && <p className='error-message' role="alert">{errors.email?.message}</p>}

      <label className='form-names' htmlFor="password">Password:</label>

      <input
        type="password"
        name="password"
        {...register("password", { required: "Password is missing" })}
        aria-invalid={errors.password ? "true" : "false"}
      />
      {errors.password && <p className='error-message' role="alert">{errors.password?.message}</p>}

      <input className='contactButton' type="submit" value="Register" />
        </form>
    </div>
  );
};

export default SignUp;
