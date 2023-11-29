"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/dist/client/components/navigation";
import { useRouter } from "next/navigation";
import queryString from "query-string";

type useCategiesProps = {
  label: string;
};

const useCategories = ({ label }: useCategiesProps) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleChangeCategory = useCallback(() => {
    if (label === "All") {
      router.push("/");
    } else {
      let currentQuery = {};

      if (params) {
        currentQuery = queryString.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        category: label,
      };

      const url = queryString.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        {
          skipNull: true,
        }
      );

      router.push(url);
    }
  }, [label, params, router]);

  return { handleChangeCategory };
};

export default useCategories;
