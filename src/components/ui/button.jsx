import React from "react";

const Button = ({
  type = "button",
  className,
  variant = "primary",
  size = "md",
  disabled=false,
  onClick,
  children,
  ...props
}) => {
  const sizes = {
    sm: "h-8 px-4 text-sm",
    md: " h-10  px-5 text-base",
    lg: " h-12 px-6 text-lg",
  };
  const variants = {
    primary: "bg-blue-500 border-none text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "border border-blue-500 text-gray-800 hover:bg-blue-700 hover:border-gray-300 hover:text-white",
  };
  return (
  
      <button
        {...props}
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`rounded text-base  transition-all duration-400 active:scale-96 ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </button>
  
  );
};

export default Button;
