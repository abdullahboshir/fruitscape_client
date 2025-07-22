/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Swal from "sweetalert2";
import FormWrapper from "@/components/form/FormWrapper";
import InputField from "@/components/form/InputField";
import SocialLogin from "./SocialLogin";
import loginImg from '../../../../public/images/login/fresh-cucumber-slices-garnished-with-green-herbs-arranged-in-a-bowl-perfect-for-healthy-meals-and-recipes-photo.jpeg';
import logo from '../../../../public/images/logo.png';
import { useLoginMutation } from "@/redux/api/authApi";




const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [passError, setPassError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
//   const { data: session, status } = useSession();
  const router = useRouter();
 
const [login, { data, isLoading, error }] = useLoginMutation();


  const handleLogin = async (data: any) => {

const res = await login(data)

    console.log('hello', data)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign up successful",
        showConfirmButton: false,
        timer: 1500,
      });

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sign up failed!",
      });
  };



  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">

      <div className="relative flex flex-col lg:flex-row shadow-2xl rounded-2xl w-[60vw] max-w-6xl overflow-hidden">
        {/* Left Image Panel */}
        <div className="w-full lg:w-1/2 relative h-[50vh]">
          <Image
            src={loginImg.src}
            fill
            alt="Tour"
            className="object-cover"
          />
        <div className="absolute inset-0 bg-black/50 p-3 flex flex-col justify-between text-white">

            <div>
              <Image
                src={logo.src}
                width={80}
                height={80}
                alt="Logo"
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold">FruitScape</h2>
              <p className="text-sm mt-2">Fruits Original Prescription for Lifelong Health.</p>
            </div>
            <div className="text-center">
              <SocialLogin />
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="w-full lg:w-1/2 bg-white p-8 space-y-3">
          <FormWrapper  onSubmit={handleLogin}>
       <div className="flex flex-col gap-5">
        
       <InputField name="email" label="Email" type="email" />
       <InputField name="password" label="Password" type="password" />


            {isLogin ? (
              <div className="text-sm text-red-500">
                {loginError && <p>{loginError}</p>}
                <Link href="/" className="hover:underline text-blue-600">
                  Forgot Password?
                </Link>
              </div>
            ) : (
              <div className="text-sm text-red-500">{passError}</div>
            )}

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
            </Button>
       </div>
          </FormWrapper>

          <div className="text-center">
            {isLogin ? (
              <button onClick={() => setIsLogin(false)} className="text-sm hover:underline">
                Create a new account
              </button>
            ) : (
              <button onClick={() => setIsLogin(true)} className="text-sm hover:underline">
                Already have an account?
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
