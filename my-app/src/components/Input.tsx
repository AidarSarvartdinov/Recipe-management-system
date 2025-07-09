'use client';

import React from 'react';
import { FieldError } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

const Input: React.FC<Props> = ({ label, error, ...inputProps }) => {
  return (
    <div>
      <label htmlFor={inputProps.id} className="block mb-1 font-medium">
        {label}
      </label>
      <input
        className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
          error
            ? 'border-red-500 ring-red-300'
            : 'border-gray-300 ring-blue-300'
        }`}
        {...inputProps}
      />
      {error && <p className="text-red-500 mt-1 text-sm">{error.message}</p>}
    </div>
  );
};

export default Input;
