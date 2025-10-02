import { InputHTMLAttributes, forwardRef } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: "default" | "outlined";
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, variant = "default", className = "", ...props }, ref) => {
    const baseStyles =
      "w-full px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500";

    const variantStyles = {
      default: "bg-gray-100 border-0 focus:bg-white",
      outlined: "bg-white border border-gray-300 focus:border-purple-500",
    };

    const inputStyles = `${baseStyles} ${variantStyles[variant]} ${
      error ? "border-red-500 focus:ring-red-500" : ""
    } ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input ref={ref} className={inputStyles} {...props} />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
