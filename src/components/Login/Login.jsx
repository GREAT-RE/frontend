import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form";
import axios from "axios";
import logoLogin from "../../assets/logoHILX.png"
import "./Login.css"

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
    <>
    <div className="login-form">
     <form onSubmit={handleSubmit(onSubmit)}>

      <label className='form-names' htmlFor="email">Email:</label>

      <input
        type="email"
        name="email"
        {...register("email", { required: "Write your e-mail" })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email && <p className='error-message' role="alert">{errors.email?.message}</p>}

      <label className='form-names' htmlFor="password">Password:</label>

      <input
        type="password"
        name="password"
        {...register("password", { required: "Write your password" })}
        aria-invalid={errors.password ? "true" : "false"}
      />
      {errors.password && <p className='error-message' role="alert">{errors.password?.message}</p>}

      <input className='contactButton' type="submit" value="Log In" />
    </form>
    </div>
    </>
  )
}

export default Login