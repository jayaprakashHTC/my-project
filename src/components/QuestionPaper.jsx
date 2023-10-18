import React from 'react'
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
const QuestionPaper = () => {

    const [getSucess, setGetSucess] = useState()
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm()
      const onSubmit = (data) => {
       
        const question = {
            question: data.question,
            choice_options: {
              A: data.A,
              B: data.B,
              C: data.C,
              D: data.D,
            },
          };

      
        axios.post('http://127.0.0.1:8000/app/api/exam/', question, {
            headers: {
                'Content-Type': 'application/json',
              },
          })
             .then(res =>{
              setGetSucess("Sucessfully Submited Data!!")
             })
             .catch(err =>{
                setGetSucess("Data not Submited!!")
             })
      }

  return (
    <>
          <form className="mt-[40px]" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="mb-[20px]">
             <input 
             type="text" 
             className="w-[100%]"
             placeholder='Enter Your question'
             {...register("question", { required: true })}
             aria-invalid={errors.question ? "true" : "false"}
             />
              {errors.question?.type === "required" && (
                <p role="alert">Question is required</p>
            )}
          </div>
          <div className="mb-[20px]">
             <input 
             type="text" 
             className="w-[100%]"
             placeholder='Enter Your Choice A'
             {...register("A", { required: true })}
             aria-invalid={errors.A ? "true" : "false"}
             />
              {errors.A?.type === "required" && (
                <p role="alert">Choice A is required</p>
            )}
          </div>
          <div className="mb-[20px]">
             <input 
             type="text" 
             className="w-[100%]"
             placeholder='Enter Your Choice B'
             {...register("B", { required: true })}
             aria-invalid={errors.B ? "true" : "false"}
             />
              {errors.B?.type === "required" && (
                <p role="alert">Choice B is required</p>
            )}
          </div>
          <div className="mb-[20px]">
             <input 
             type="text" 
             className="w-[100%]"
             placeholder='Enter Your Choice C'
             {...register("C", { required: true })}
             aria-invalid={errors.C ? "true" : "false"}
             />
              {errors.C?.type === "required" && (
                <p role="alert">Choice C is required</p>
            )}
          </div>
          <div className="mb-[20px]">
             <input 
             type="text" 
             className="w-[100%]"
             placeholder='Enter Your Choice D'
             {...register("D", { required: true })}
             aria-invalid={errors.D ? "true" : "false"}
             />
              {errors.D?.type === "required" && (
                <p role="alert">Choice D is required</p>
            )}
          </div>

          <div>
            <button type='submit' className='bg-[#000] text-[#fff] mt-4 mb-4 p-4'>Submit</button>
          </div>
       </form>
    </>
  )
}

export default QuestionPaper