"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from 'next/image';
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";


const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries())

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    })
    if (data) {
      toast.success('Login Successfull')
      redirect('/')
    } else {
      toast.error('Login Faild Try Again')

    }

  }

  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className='mt-5 mb-10 flex gap-10 container mx-auto p-2 md:p-10 rounded-2xl  bg-[#f8fff6]'>

      <div className="hidden md:block flex-1">
        <Image
          className='h-140 rounded-2xl object-cover'
          src={'/assets/signup.png'}
          alt='Login Page'
          width={500}
          height={500}
        />
      </div>

      <div className=" flex-1   px-4">

        <div className="w-full max-w-md p-8 rounded-2xl bg-white shadow-xl border">

          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome Back
            </h1>
            <p className="text-gray-500 mt-1">
              Login to continue
            </p>
          </div>

          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-sm font-medium text-gray-600">
                Email
              </Label>

              <Input
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Enter your gmail"
              />

              <FieldError className="text-red-500 text-sm" />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Must contain uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Must contain number";
                }
                return null;
              }}
            >
              <Label className="text-sm font-medium text-gray-600">
                Password
              </Label>

              <Input
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Enter your password"
              />



              <FieldError className="text-red-500 text-sm" />
            </TextField>

            <button type="submit"  className="group mt-3  text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-black">
              <span className="block border-2 border-black rounded-[0.75em] px-5 py-2 bg-green-800 text-white -translate-y-1 transition-transform duration-100 ease-in hover:translate-y-[-0.33em] active:translate-y-0">
                Login
              </span>
            </button>


          </Form>

          <p className="text-center my-2"> or </p>

          <div>
            <button onClick={signIn} className=" w-full text-center text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-green-800">
              <span className="block border-2 border-green-800 rounded-[0.75em] px-5 py-2 bg-white text-green-800 -translate-y-1 transition-transform duration-100 ease-in hover:translate-y-[-0.33em] active:translate-y-0">
               <span className="flex gap-2 w-full justify-center items-center"><FcGoogle /> Sign in with Google</span>
              </span>
            </button>
            <p className="text-center mt-2">
              Don't have an account? <Link className="text-green-900 underline " href={'/signup'}>Sign Up</Link>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginPage;