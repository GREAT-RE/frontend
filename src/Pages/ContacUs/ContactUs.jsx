import React from 'react'
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Contactus.css"
import logoContact from "../../assets/HOMEINLX.svg"

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
        <div className="logoC" style={{ backgroundImage: `url(${logoContact})`}}>
        </div>
    </div>
    <div className='contact-form'>
    <fieldset className="fieldset-contact">
<form className='all-forms' onSubmit={handleSubmit(onSubmit)}>
  <label className='form-names' htmlFor="name">Name</label>
  <input className='input-forms'
        {...register("name", { required: "Name is missing" })}
        aria-invalid={errors.name ? "true" : "false"}
        aria-describedby="name-description"
  />
  {errors.email && <p className='error-message' role="alert">{errors.name?.message}</p>}
  <div id="name-description"></div>

  <label className='form-names' htmlFor="email">E-mail</label>
  <input className='input-forms'
    {...register("email", { required: "E-mail is missing" })}
    aria-invalid={errors.email ? "true" : "false"}
    aria-describedby="email-description"
  />
  {errors.email && <p className='error-message' role="alert">{errors.email?.message}</p>}
  <div id="email-description"></div>

  <label className='form-names' htmlFor="comment">Write your comment</label>
  <textarea className='comment-section'
    {...register("comment", { required: "Comment is missing" })}
    aria-invalid={errors.comment ? "true" : "false"}
    aria-describedby="comment-description"
  />
  {errors.comment && <p className='error-message' role="alert">{errors.comment?.message}</p>}
  <div id="comment-description"></div>
  <input type="submit" className='contactButton' value="Submit"/>
  </form>
  </fieldset>
  </div>

  

<br></br>
<br></br>
<br></br>
</>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ContactUs />, rootElement);

export default ContactUs;