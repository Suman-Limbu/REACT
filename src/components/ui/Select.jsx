import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Select = ({
  label,
  required = false,
  variant = "outline", // Default to outline for a standard professional look
  size = "md",
  options = [],
  placeholder = "Select an option",
  disabled = false,
  error = "",
  value,
  onChange,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Design tokens for sizes
  const sizes = {
    sm: "text-sm h-9 px-3",
    md: "text-base h-10 px-4",
    lg: "text-lg h-12 px-4",
  };

  // Modern, industry-standard color palettes
  const baseStyles = "w-64 flex items-center justify-between rounded-md transition-all duration-200 cursor-pointer font-medium border text-left focus:outline-none focus:ring-2";
  
  const variants = {
    outline: error 
      ? "bg-white border-red-500 text-gray-900 focus:ring-red-100" 
      : "bg-white border-gray-300 text-gray-900 hover:border-gray-400 focus:ring-blue-50/50 focus:border-blue-500",
    filled: error
      ? "bg-red-50 border-red-500 text-gray-900 focus:ring-red-100"
      : "bg-gray-50 border-transparent text-gray-900 hover:bg-gray-100 focus:ring-blue-50/50 focus:border-blue-500",
  };

  const disabledStyles = "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed pointer-events-none";

  const handleOptionClick = (option) => {
    if (onChange) onChange(option);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`flex flex-col gap-1.5 ${className}`}>
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-gray-700 flex items-center gap-0.5">
          {label}
          {required && <span className="text-red-500" aria-hidden="true">*</span>}
        </label>
      )}

      {/* Select Trigger Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          ${baseStyles} 
          ${sizes[size]} 
          ${disabled ? disabledStyles : variants[variant]}
        `}
      >
        <span className={`block truncate ${!value ? "text-gray-400 font-normal" : ""}`}>
          {value || placeholder}
        </span>
        <ChevronDown 
          size={18} 
          className={`text-gray-400 transition-transform duration-200 ml-2 shrink-0 ${isOpen ? "rotate-180 text-gray-600" : ""}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && !disabled && (
        <div className="relative w-64">
          <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <ul className="max-h-60 overflow-y-auto text-sm text-gray-700">
              {options.length === 0 ? (
                <li className="px-4 py-2 text-gray-400 italic text-center">No options available</li>
              ) : (
                options.map((option, idx) => {
                  const isSelected = value === option;
                  return (
                    <li
                      key={idx}
                      onClick={() => handleOptionClick(option)}
                      className={`
                        cursor-pointer select-none py-2 px-4 text-left transition-colors duration-150
                        ${isSelected ? "bg-blue-50 text-blue-700 font-semibold" : "hover:bg-gray-50 text-gray-900"}
                      `}
                    >
                      <span className="block truncate">{option}</span>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>
      )}
    </div>
  );
};

export default Select;