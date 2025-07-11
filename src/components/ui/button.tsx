import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = "solid", className = "", ...props }) => {
  const base = "px-4 py-2 rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const solid = "bg-orange-600 text-white hover:bg-orange-700";
  const outline = "border border-orange-600 text-orange-600 bg-white hover:bg-orange-50";
  const classes = `${base} ${variant === "outline" ? outline : solid} ${className}`;
  return <button className={classes} {...props} />;
};
