import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 shadow-xl backdrop-filter backdrop-blur-xl my-8 rounded-2xl w-full max-w-md overflow-hidden"
    >
      <div className="p-8">
        <h2 className="bg-clip-text bg-linear-to-r from-green-400 to-emerald-500 mb-6 font-bold text-transparent text-3xl text-center">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            icon={Lock}
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center mb-4">
            <Link
              to="/forgot-password"
              className="text-green-400 text-sm hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {error && <p className="mt-2 font-semibold text-red-500">{error}</p>}

          <Motion.button
            className="bg-linear-to-r from-green-500 hover:from-green-600 to-emerald-600 hover:to-emerald-700 shadow-lg mt-5 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 w-full font-bold text-white transition duration-200 cursor-pointer disabled:cursor-no-drop"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="mx-auto w-6 h-6 animate-spin" />
            ) : (
              "Login"
            )}
          </Motion.button>
        </form>
      </div>

      <div className="flex justify-center bg-gray-900/50 px-8 py-4">
        <p className="text-gray-400 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-400 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </Motion.div>
  );
};

export default LoginPage;
