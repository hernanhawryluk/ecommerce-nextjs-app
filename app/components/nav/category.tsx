"use client";

import { IconType } from "react-icons";
import useCategories from "@/hooks/use-categories";

interface CategoryProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const Category: React.FC<CategoryProps> = ({ label, icon: Icon, selected }) => {
  const { handleChangeCategory } = useCategories({ label });

  return (
    <div
      onClick={handleChangeCategory}
      className={`flex items-center justify-center text-center gap-2 p-2 border-b-2 hover:text-slate-800 transition cursor-pointer active:scale-[0.9]
    ${
      selected
        ? "boder-b-slate-800 text-slate-800"
        : "border-transparent text-slate-500"
    }
    `}
    >
      <Icon size={20} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default Category;
