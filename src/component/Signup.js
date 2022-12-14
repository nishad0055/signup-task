import React, { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useForm } from "react-hook-form";
import banner from '../assets/images/signup-banner.png'
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import toast from 'react-hot-toast';


const Signup = () => {
    const {register , formState: { errors }, handleSubmit, reset} = useForm()
    const [stepFrom, setStepFrom] = useState(0)
    const {createUser , updateUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = data =>{
       
        

        createUser(data.email , data.password)
       .then( result =>{
        const user = result.user 
        reset();
        toast.success('account created successful')
        navigate('/attendance-info')

        const userInfo = {
            displayName: data.firstname + ' ' + data.lastname,
            phoneNumber: data.phone

        }
        updateUser(userInfo)
        .then(result=>{
            const user = result.user
           
        })
        .catch(()=>{})

       })
       .catch(e=> console.log(e))

       const users = {
          firstName: data.firstname ,
          lastName: data.lastname,
          email: data.email,
          phoneNumber: data.phone,
       }
       
       fetch('https://ultimate-server.vercel.app/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(users)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
       })


    }
    const handleNext = () =>{
        setStepFrom(curr => curr+1)
    }

  const handleBack = () =>{
    setStepFrom(back => back-1)
  }

    return (
        <div className=' my-5 lg:flex justify-center items-center font-inter' >
            <div className='lg:w-3/5'>
                 <img src= {banner} alt="" />
            </div>
            <div className='shadow-lg lg:w-1/3 h-full p-10' >
                <h2 className='text-xl text-center  text-[#242424] font-bold mt-[8rem] mb-[6.813rem]' >Sign up Form</h2>
            <form className='font-inter'  onSubmit={handleSubmit(handleRegister)} >
                {
                    stepFrom === 0 &&
                    <section>
                    <div className="form-control w-full border-b-2 relative border-[#A4A4A4] mb-20">
                        <input  {...register("firstname" , { required: true })} name='firstname' type="text" placeholder="Write First Name" className="border-0 outline-none w-full text-base " />
                    </div>
                    <div className="form-control w-full border-b-2 relative border-[#A4A4A4] mb-16">
                        
                        <input  {...register("lastname" , { required: true })} name='lastname' type="text" placeholder="Write Last Name" className="border-0 outline-none w-full text-base " />
                    </div>
                </section>
                }
                 {
                    stepFrom === 1 &&
                    <section>
                    <div className="form-control w-full mb-20 border-b-2 border-[#A4A4A4] relative">
                        
                        <input  {...register("phone" , { required: true })} name ="phone" type="text" placeholder="+880 1xxxxxxxx" className="border-0 outline-none w-full text-base " />
                    </div>
                    <div className="form-control w-full mb-16 border-b-2 border-[#A4A4A4] relative">
                        <input   {...register("email" , { required: true })} name= "email" type="text" placeholder="Write Email Address" className="border-0 outline-none w-full text-base " />
                    </div>
                </section>
                }
                 {
                    stepFrom === 2 &&
                    <section>
                    <div className="form-control w-full  border-b-2  border-[#A4A4A4]  relative">
                        
                        <input  {...register("password" , { required: true , minLength: {value: 8 , message: 'password must be at least 8 characters'}, pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters'}})}  name ="password" type="password" placeholder="Write Password" className="border-0 outline-none w-full text-base " />
                        
                    </div>
                    {errors.password && <p className='text-red-500 my-2'>{errors.password.message}</p>}
                </section>
                }
                
                 {
                    stepFrom ===  1  ?
                    <div className='flex justify-evenly mt-3 mb-28 items-center' >
                      <button className='btn btn-ghost' onClick={handleBack}  >back</button>
                      <button onClick={handleNext} type="submit" className='shadow-[0px_5px_10px_rgba(0,0,0,.4)] bg-[#1678CB] px-6  py-3  text-white my-3 rounded-xl hover:bg-white hover:text-[#1678CB] cursor-pointer border border-[#1678CB]' > <span className='flex items-center' >Next Step <ArrowRightIcon className='w-6 ml-1 ' /> </span></button> 
                    </div>:
                    stepFrom === 2?
                   <div className='flex justify-evenly mt-3 mb-28 items-center' >
                     <button className='btn btn-ghost' onClick={handleBack}  >back</button>  
                      <input  type="submit" className= ' shadow-[0px_5px_10px_rgba(0,0,0,.4)] bg-[#1678CB] px-6 py-3  text-white my-3 rounded-xl hover:bg-white hover:text-[#1678CB] cursor-pointer border border-[#1678CB]' value="Sign Up" />
                      
                   </div>:

                  <div className='flex justify-center mt-3 mb-28' >
                       <button onClick={handleNext} type="submit" className='shadow-[0px_5px_10px_rgba(0,0,0,.4)] bg-[#1678CB] px-6  py-3  text-white my-3 rounded-xl hover:bg-white hover:text-[#1678CB] cursor-pointer border border-[#1678CB]' > <span className='flex items-center' >Next Step <ArrowRightIcon className='w-6 ml-1 ' /> </span></button> 
                  </div>

                 }  

                
                    
                
            </form>
                 <div className='flex justify-end mb-5'>
                    <p> Already Have an account?  <Link to='/login' className='text-[#1678CB] font-semibold' >LOGIN HERE</Link> </p>
                 </div>
            </div>
        </div>
    );
};

export default Signup;