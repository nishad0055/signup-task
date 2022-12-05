import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import banner from '../../assets/images/signup-banner.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';



const Login = () => {
    const {register , formState: { errors }, handleSubmit, reset} =  useForm()
    const {userSign} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = data =>{


        userSign(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user)
            navigate('/')
        })
        .catch(e=> console.log(e))

    }
    return (
        <div className=' my-5 lg:flex justify-center items-center' >
            <div className='lg:w-3/5'>
                 <img src= {banner} alt="" />
            </div>
            <div className='shadow-lg lg:w-1/3 h-full p-10' >
                <h2 className='text-xl text-center text-[#242424]  font-bold mt-[8rem] mb-[6.813rem]' >Log in Form</h2>
            <form className='font-inter'  onSubmit={handleSubmit(handleLogin)} >
                     
                    <section>
                    
                    <div className="form-control w-full mb-16 border-b-2 border-[#A4A4A4] relative">
                        <input   {...register("email" , { required: true })} name= "email" type="text" placeholder="Write Email Address" className="border-0 outline-none w-full text-base text-[#B4B4B4]" />

                    </div>
                    <div className="form-control w-full mb-16 border-b-2  border-[#A4A4A4]  relative">
                        
                        <input  {...register("password" , { required: true })}  name ="password" type="text" placeholder="Write Password" className="border-0 outline-none w-full text-base text-[#B4B4B4]" />
                    </div>
                </section>
            
                   
                   <div className='flex justify-center mt-3 mb-28' >
                      
                      <input  type="submit" className=' shadow-[0px_5px_10px_rgba(0,0,0,.4)] bg-[#1678CB] px-6 py-2  text-white my-3 rounded-xl hover:bg-white hover:text-[#1678CB] cursor-pointer border border-[#1678CB]' value="Log In" />
                   </div> 
                    
            </form>
                 <div className='flex justify-end mb-5'>
                    <p><small>Don't have an account</small> <Link to ='/signup' >SIGNUP HERE</Link> </p>
                 </div>
            </div>
        </div>
    );
};

export default Login;