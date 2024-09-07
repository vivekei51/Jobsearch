"use client"
import Image from "next/image";
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible)
    }
  return (
    <div>
       <main  className="h-[700px]">
       <div>
        <img className="pt-[10px] pl-[10px]" src="/assets/images/logo.png" alt = "imgae1"/>
        <div className=" flex justify-around  w-[1376px] h-[690px]  gap-[32px]">
        <div className="m-auto">
          <div className="flex flex-col mb-[24px]">
            <h1 className="text-[#232323] text-[40px] font-inter">Sign in</h1>
            <p className="text-[#969696]  text-[18px] font-inter">Please Sign in to continue to your account.</p>
            </div>
            <form>
          {/* Email Input Field */}
          <div className="relative mb-6">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F29F05] focus:border-transparent  font-inter"
            />
            <label
              htmlFor="email"
              className="absolute -top-3 left-3 bg-white px-1 text-sm text-[#F29F05]  font-inter"
            >
              Email
            </label>
          </div>

          {/* Password Input Field */}
          <div className="relative mb-6">
            <input
             placeholder="Password"
              type={passwordVisible ? 'text' : 'password'}
             
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F29F05] focus:border-transparent  font-inter"
            />
            

            {/* Eye Icon for toggling visibility */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              style={{ color: '#9A9A9A' }} 
            >
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="w-[18px] h-[18px]"
              />
            </button>
          </div>
          <div className=" flex relative mb-6 gap-[10px] items-center">
       <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="w-[18px] h-[18px]" />
        <label for="vehicle1" className="text-[16px]  font-inter"> Keep me Signed in</label>
       </div>

          <button
            type="submit"
            className="w-full bg-[#F29F05] text-white py-2 px-4 rounded-lg  font-inter"
          >
            Sign in 
          </button>
        </form>
          </div>
        <div className=" w-[760px] h-[669.34px]">
         <img className="w-[760px] h-[669.34px]  gap-0 rounded-tl-[21.44px] rounded-tr-0 rounded-br-0 rounded-bl-0" src = " /assets/images/log.png" alt = "image1"/>
        </div>
        </div>
       </div>
    </main>
    </div>
  )
}

export default Login
