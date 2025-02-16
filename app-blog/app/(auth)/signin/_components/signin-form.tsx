"use client";

import { Button } from "@/components/ui/button";
import GoogleLogo from "@/components/logo/google";
import { signIn } from "next-auth/react";

const SignInForm = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Button onClick={() => signIn("google")} className="flex items-center">
        <GoogleLogo />
        Continue with Google
      </Button>
    </div>
  );
};

export default SignInForm;
