import Logo from "../components/Logo"
import InputField from "../components/InputField"
import Button from "../components/Button"
import { useState } from "react";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <Logo />

        <form className="space-y-4">

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            rightElement={
              <button
                type = "button"
                onClick = {() => setShowPassword(!showPassword)}
                className = "text-gray-500 hover:text-indigo-600"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            }
          />


          <Button 
            text="Login"
            type="submit"
          />

        </form>

      </div>
    </div>
  )
}

export default Login