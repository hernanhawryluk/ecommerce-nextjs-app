"use client";

import { FieldValues, UseFormRegister } from "react-hook-form";

interface CustomCheckboxProps {
  id: string;
  label: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
}
const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  label,
  disabled,
  register,
}) => {
  return (
    <div className="group w-full flex flex-row gap-2 items-center">
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        {...register(id)}
        placeholder=""
        className="h-[19px] w-[19px] cursor-pointer"
      />
      <label htmlFor={id} className="text-[1.06rem] font-medium cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
