"use client";

import React from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface TextAreaProps {
  id: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      <textarea
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        className={`peer block px-3 h-[150px] pb-[13px] pt-[13px] w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 disabled:cursor-not-allowed 
      ${errors[id] ? "border-pink-600" : "border-slate-300"}
      ${errors[id] ? "focus:border-pink-600" : "focus:border-slate-300"}
      `}
      />
      <label
        htmlFor={id}
        className={`absolute text-sm text-gray-400 duration-300 transform -translate-y-[17px] scale-75 top-2 z-10 origin-[0] bg-slate-100 ml-1 px-2 peer-focus:text-slate-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-[60px] peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[17px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1
        ${errors[id] ? "text-pink-600" : "text-slate-400"}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
