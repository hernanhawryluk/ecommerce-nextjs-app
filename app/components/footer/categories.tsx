"use client";

import useCategories from "@/hooks/use-categories";

interface CategoriesProps {
  label: string;
}

const Categories: React.FC<CategoriesProps> = ({ label }) => {
  const { handleChangeCategory } = useCategories({ label });

  if (label === "All") {
    return null;
  }

  return (
    <div className="cursor-pointer" onClick={handleChangeCategory}>
      {label}
    </div>
  );
};

export default Categories;
