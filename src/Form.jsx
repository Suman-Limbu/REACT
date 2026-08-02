import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const onSubmit=(data)=>{
console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
<input {...register("name",{required:"Name cannot be empty"})}/>
{errors.name && <span>{errors.name.message}</span>}
<input type="number" {...register("age",{
    required:"age is reqquired",
    min:{
        value:10,
        message:"age must be more than 10"
    },
        max:{
        value:60,
        message:"age must be less than 60"
    }
})}/>
{errors.age && <span>{errors.age.message}</span>}
<input type="password" {...register("password")}/>
<button type="submit">Submit</button>
    </form>
  )
}

export default Form;