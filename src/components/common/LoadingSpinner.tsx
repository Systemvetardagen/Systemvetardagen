import React from "react";
import { CgSpinner } from "react-icons/cg";

interface LoadingSpinnerProps {
  isLoading: boolean;
  size?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  isLoading,
  size = 24,
}) => {
  if (!isLoading) return null;

  return (
    <div className="flex items-center justify-center">
      <CgSpinner className="animate-spin text-gray-600" size={size} />
    </div>
  );
};

export default LoadingSpinner;
