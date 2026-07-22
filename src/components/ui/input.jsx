import { X } from "lucide-react";
import React, { useId, useState } from "react";

const Input = ({
  id,
  onChange,
  value,
  defaultValue,
  type = "text",
  label,
  required = false,
  disabled = false,
  placeholder,
  size = "md",
  error,
  helperText,
  ...props
}) => {
  //id for label and input connection
  const generateId = useId();
  const inputId = id || generateId;

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const sizes = {
    sm: "h-8 text-sm",
    md: "h-10 text-base",
    lg: "h-12 text-lg",
  };
  return (
    <div className="relative flex flex-col gap-1 bg-red-500">
      {label && (
        <label htmlFor={inputId} className="text-gray-800">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <input
        {...props}
        id={inputId}
        onChange={(e) => setText(e.target.value)}
        defaultValue={defaultValue}
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className={`relative bg-white text-gray-600 border border-gray-200 hover:border-gray-300   px-4 py-3
       placeholder:text-gray-400 
      w-full
rounded
transition-all duration-200
focus:outline-none
focus:border-blue-500
focus:ring-2
focus:ring-blue-500/20  ${sizes[size]} disabled:cursor-no-drop disabled:opacity-70
${error ? " focus:border-red-500 focus:ring-red-500/20" : ""}

`}
      />

      <span
        onClick={() => setOpen(!open)}
        className="bg-gray-200 p-0.5 rounded-full absolute top-10 right-0 mr-3 text-gray-500"
      >
        <X className="size-4" />
      </span>
      {error ? (
        <p className="text-sm font-medium text-red-500">{error}</p>
      ) : (
        helperText && (
          <p className="text-sm font-medium text-gray-500">{helperText}</p>
        )
      )}
    </div>
  );
};

export default Input;




