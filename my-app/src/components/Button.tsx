import React from "react";

interface Props {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ variant = "primary", children }) => {
  const baseStyles =
    "px-4 py-2 rounded cursor-pointer font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500",
    secondary:
      "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400",
  };
  const variantStyles = variants[variant] || variants.primary;
  return (
    <button className={`${baseStyles} ${variantStyles}`}>{children}</button>
  );
};
