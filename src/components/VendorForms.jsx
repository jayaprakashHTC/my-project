import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
const VendorForm = () => {
   const [getSucess, setGetSucess] = useState()
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm()
      const onSubmit = (data) => {
        const { brandname, productname, productprice, image } = data;

        // Create a new FormData object
        const formData = new FormData();
      
        // Append form data to the FormData object
        formData.append('brandname', brandname);
        formData.append('productname', productname);
        formData.append('productprice', productprice);
      
        // Append the image file correctly
        formData.append('image', image[0]); // Assuming "image" is an array
        axios.post('http://127.0.0.1:8000/app/products/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
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
       <h1 className="text-green-900 text-center text-[50px]">{getSucess}</h1>
       <form className="mt-[40px]" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="mb-[20px]">
             <input 
             type="text" 
             className="w-[100%]"
             placeholder='Enter Your Brand Name'
             {...register("brandname", { required: true })}
             aria-invalid={errors.brandname ? "true" : "false"}
             />
              {errors.brandname?.type === "required" && (
                <p role="alert">First brandname is required</p>
            )}
          </div>
          <div className="mb-[20px]">
             <input 
             type="text" 
             className="w-[100%]"
             placeholder='Enter Your Product Name'
             {...register("productname", { required: true })}
             aria-invalid={errors.productname ? "true" : "false"}
             />
              {errors.productname?.type === "required" && (
                <p role="alert">First productname is required</p>
            )}
          </div>
          <div className="mb-[20px]">
             <input 
             type="text" 
             className="w-[100%]"
             placeholder='Enter Your Brand Price'
             {...register("productprice", { required: true })}
             aria-invalid={errors.productprice ? "true" : "false"}
             />
              {errors.productprice?.type === "required" && (
                <p role="alert">First productprice is required</p>
            )}
          </div>
          <div>
             <input 
             type="file" 
             placeholder='Enter Your Brand File'
             {...register("image", { required: true })}
             aria-invalid={errors.image ? "true" : "false"}
             />
              {errors.image?.type === "required" && (
                <p role="alert">First image is required</p>
            )}
          </div>
          <div>
            <button type='submit' className='bg-[#000] text-[#fff] mt-4 mb-4 p-4'>Submit</button>
          </div>
       </form>
   </>
  )
}

export default VendorForm