import React from 'react'
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Contactus.css"
import logoContact from "../../assets/logoHILX.png"

const ContactUs = () => {
    const [collectible, setCollectible] = useState({});
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const onSubmit = (data) => setCollectible(data);
  return (
    <>
    <div className='contactLogo'>
        <div className="logoC" style={{ backgroundImage: `url(${logoContact})` }}>
        </div>
    </div>
<form onSubmit={handleSubmit(onSubmit)}>
  <label htmlFor="name">Name</label>
  <input
        {...register("name", { required: "Write your name" })}
        aria-invalid={errors.name ? "true" : "false"}
        aria-describedby="name-description"
  />
  {errors.email && <p role="alert">{errors.name?.message}</p>}
  <div id="name-description"></div>

  <label htmlFor="email">E-mail</label>
  <input
    {...register("email", { required: "Write your e-mail" })}
    aria-invalid={errors.email ? "true" : "false"}
    aria-describedby="email-description"
  />
  {errors.email && <p role="alert">{errors.email?.message}</p>}
  <div id="email-description"></div>

  <label htmlFor="comment">Write your comment</label>
  <input className='comment-section'
    {...register("comment", { required: "Write your comment" })}
    aria-invalid={errors.comment ? "true" : "false"}
    aria-describedby="comment-description"
  />
  {errors.comment && <p role="alert">{errors.comment?.message}</p>}
  <div id="comment-description"></div>

  <input type="submit" value="Submit your Comment"/>
</form>
<br></br>
<br></br>
<br></br>
</>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ContactUs />, rootElement);
export default ContactUs