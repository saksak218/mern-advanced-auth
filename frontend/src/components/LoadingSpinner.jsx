import { motion as Motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="relative flex justify-center items-center bg-linear-to-br from-gray-900 via-green-900 to-emerald-900 min-h-screen overflow-hidden">
      <Motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="border-4 border-green-200 border-t-4 border-t-green-500 rounded-full w-16 h-16"
      />
    </div>
  );
};

export default LoadingSpinner;
