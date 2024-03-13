"use client";

import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SearchBar = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) return router.push("/");

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          searchTerm: data.searchTerm,
        },
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
      <input
        {...register("searchTerm")}
        autoComplete="off"
        type="text"
        placeholder="Explore SmartStore"
        className="p-[0.3rem] border boder-gray-300 h-9 rounded-l-md focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-50 xl:w-60"
      />
      <button className="bg-green-700 opacity-90 hover:opacity-100 h-9 font-semibold text-slate-50 p-[0.3rem] w-20 rounded-r-md active:scale-95 transition pb-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
