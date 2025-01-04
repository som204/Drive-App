import React from 'react'
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = async (data) => {
        const response= await fetch('http://localhost:3000/user/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        });
        const result= await response.text();
        console.log(result);
      };


  return (
    <div className="flex justify-center align-middle my-8">
         <form onSubmit={handleSubmit(onSubmit)} >
      <input className="border border-black border-5"
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
      <input className="border border-black border-5"
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
      <input className="border border-black border-5" type="submit" />
    </form>
    </div>
  )
}

export default Login;