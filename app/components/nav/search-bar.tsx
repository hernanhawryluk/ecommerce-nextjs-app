"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type SearchBarType = {
  searchBar: boolean;
};

const SearchBar: React.FC<SearchBarType> = ({ searchBar }) => {
  const searchInputRef = useRef<HTMLInputElement | null>(null);
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

  useEffect(() => {
    if (!searchBar) return;
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchBar]);

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
        ref={searchInputRef}
        autoComplete="off"
        type="text"
        placeholder="Explore SmartStore"
        className="px-2 border-[1px] border-r-0 boder-gray-400 bg-slate-100 h-8 rounded-l-md focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-50 xl:w-[200px]"
      />
      <button className="bg-slate-900 border-[1px] border-l-0 border-gray-400 opacity-75 hover:bg-opacity-70 h-8 font-semibold text-slate-50 p-[0.3rem] w-20 rounded-r-md active:scale-95 transition flex items-center justify-center">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
