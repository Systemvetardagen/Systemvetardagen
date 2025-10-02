import React from "react";
import { CgSpinner } from "react-icons/cg";

interface LoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="flex items-center justify-center">
      <CgSpinner className="animate-spin text-gray-600" size={24} />
    </div>
  );
};

export default LoadingSpinner;
