import React from 'react';

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'destructive'
    | 'success';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    children,
    className = '',
    disabled,
    ...props
}) => {
    const baseClasses = `
    inline-flex items-center justify-center
    font-medium rounded-lg transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
    ${fullWidth ? 'w-full' : ''}
  `
        .trim()
        .replace(/\s+/g, ' ');

    const variantClasses = {
        primary:
            'bg-primary text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm',
        secondary:
            'bg-secondary text-white hover:bg-[#a6337f] focus:ring-gray-500 shadow-sm',
        outline:
            'border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-500',
        ghost: 'text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-500',
        destructive:
            'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm',
        success:
            'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-sm',
    };

    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-xl',
    };

    const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `
        .trim()
        .replace(/\s+/g, ' ');

    return (
        <button
            className={buttonClasses}
            disabled={disabled || isLoading}
            {...props}
        >
            {leftIcon && !isLoading && (
                <span className="mr-2 flex-shrink-0">{leftIcon}</span>
            )}

            {isLoading && (
                <span className="mr-2 flex-shrink-0">
                    <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                </span>
            )}

            <span>{children}</span>

            {rightIcon && !isLoading && (
                <span className="ml-2 flex-shrink-0">{rightIcon}</span>
            )}
        </button>
    );
};

export default Button;
