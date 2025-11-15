import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { isLoading, forgotPassword } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
    setIsSubmitted(true);
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 shadow-xl backdrop-filter backdrop-blur-xl rounded-2xl w-full max-w-md overflow-hidden"
    >
      <div className="p-8">
        <h2 className="bg-clip-text bg-linear-to-r from-green-400 to-emerald-500 mb-6 font-bold text-transparent text-3xl text-center">
          Forgot Password
        </h2>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <p className="mb-6 text-gray-300 text-center">
              Enter your email address and we we'll send you a link to reset
              your password.
            </p>
            <Input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-linear-to-r from-green-500 hover:from-green-600 to-emerald-600 hover:to-emerald-700 shadow-lg px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 w-full font-bold text-white transition duration-200"
            >
              {isLoading ? (
                <Loader className="mx-auto size-6 animate-spin" />
              ) : (
                "Send Reset Link"
              )}
            </Motion.button>
          </form>
        ) : (
          <div className="text-center">
            <Motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="flex justify-center items-center bg-green-500 mx-auto mb-4 rounded-full w-16 h-16"
            >
              <Mail className="w-8 h-8 text-white" />
            </Motion.div>
            <p className="mb-6 text-gray-300">
              If an account exists for {email}, you will receive a password
              reset link shortly.
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-center bg-gray-900/50 px-8 py-4">
        <Link
          to="/login"
          className="flex items-center text-green-400 text-sm hover:underline"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to login
        </Link>
      </div>
    </Motion.div>
  );
};

export default ForgotPasswordPage;
