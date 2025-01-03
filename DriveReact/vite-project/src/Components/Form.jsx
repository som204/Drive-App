import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    let response = await fetch("http://localhost:3000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let result = await response.text();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Email"
        type="email"
        {...register("email", {
          required: { value: true, message: "This Field is Required" },
          minLength: { value: 10, message: "Min Length is 10" },
        })}
      />
      <br />
      {errors.email && <span>{errors.email.message}</span>}
      <br />
      <input
        placeholder="Username"
        type="text"
        {...register("username", {
          required: { value: true, message: "This Field is Required" },
          minLength: { value: 5, message: "Min Length is 5" },
        })}
      />
      <br />
      {errors.username && <span>{errors.username.message}</span>}
      <br />
      <input
        placeholder="Password"
        type="password"
        {...register("password", {
          required: { value: true, message: "This Field is Required" },
          minLength: { value: 8, message: "Min Length is 8" },
        })}
      />
      <br />
      {errors.password && <span>{errors.password.message}</span>}
      <br />
      <input type="submit" />
    </form>
  );
};

export default Form;
