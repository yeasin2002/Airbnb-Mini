import { RegisterForm } from "@/components/forms";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Login;
