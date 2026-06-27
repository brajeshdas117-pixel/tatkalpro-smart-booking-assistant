import Logo from "../components/Logo"
import InputField from "../components/InputField"
import Button from "../components/Button"

function Login() {
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
            type="password"
            placeholder="Enter your password"
          />

          <Button />

        </form>

      </div>
    </div>
  )
}

export default Login