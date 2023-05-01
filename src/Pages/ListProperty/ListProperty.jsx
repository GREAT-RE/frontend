import React from 'react'
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./ListProperty.css"
import logoContact from "../../assets/logoHILX.png"

const ListProperty = () => {
    const [property, setProperty] = useState({});
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const onSubmit = (data) => setProperty(data);
  return (
    <>
    <div className='contactLogo'>
        <div className="logoC" style={{ backgroundImage: `url(${logoContact})` }}>
        </div>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
  <label htmlFor="name">Name of the property</label>
  <input
    {...register("name", { required: "Write the name of the property" })}
    aria-invalid={errors.name ? "true" : "false"}
    aria-describedby="name-description"
  />
  {errors.name && <p role="alert">{errors.name?.message}</p>}
  <div id="name-description"></div>

  <label htmlFor="address">Address</label>
  <input
    {...register("address", { required: "Write the address of the property" })}
    aria-invalid={errors.address ? "true" : "false"}
    aria-describedby="address-description"
  />
  {errors.address && <p role="alert">{errors.address?.message}</p>}
  <div id="address-description"></div>

  <label htmlFor="price">Price</label>
  <input
    {...register("price", { required: "Write the price of the property" })}
    aria-invalid={errors.price ? "true" : "false"}
    aria-describedby="price-description"
  />
  {errors.price && <p role="alert">{errors.price?.message}</p>}
  <div id="price-description"></div>

  <label htmlFor="propertyType">Property Type</label>
  <select {...register("propertyType")}>
    <option value="house">House</option>
    <option value="apartment">Apartment</option>
    <option value="condo">Condo</option>
    <option value="room">Room</option>
  </select>

  <label htmlFor="description">Write a description of the property</label>
  <input
    className="description-section"
    {...register("description", { required: "Write your comment" })}
    aria-invalid={errors.description ? "true" : "false"}
    aria-describedby="description"
  />
  {errors.description && <p role="alert">{errors.comment?.message}</p>}
  <div id="description"></div>

  <input type="submit" value="Submit your property" />
</form>
<br></br>
<br></br>
<br></br>
</>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ListProperty />, rootElement);
export default ListProperty