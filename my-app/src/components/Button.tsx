import React from 'react';

interface Props {
  variant?: 'primary' | 'secondary';
  type?: 'reset' | 'button' | 'submit' | undefined;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({
  variant = 'primary',
  type,
  onClick,
  disabled,
  children,
}) => {
  const baseStyles =
    'px-2 sm:px-4 py-2 rounded cursor-pointer font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary:
      'border-2 border-orange-600 bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500',
    secondary:
      'border-2 border-gray-600 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400',
  };
  const variantStyles = variants[variant] || variants.primary;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles}`}
    >
      {children}
    </button>
  );
};
