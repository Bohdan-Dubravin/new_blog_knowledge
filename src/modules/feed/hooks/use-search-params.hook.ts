import { useSearchParams } from "react-router-dom";
import { serializeSearchParams } from "../../../utils/serialize";

export const usePageParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 0;

  // const setPage = (page: number) => {
  //   setSearchParams(serializeSearchParams({ page: String(page) }));
  // };

  const setPage = (page: number) => {
    console.log(page);

    setSearchParams({ page: page.toString() });
  };

  return { page, setPage };
};
