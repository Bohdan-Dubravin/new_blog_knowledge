import FeedToggle from "../feed-toggle/feed-toggle.component";
import ArticleList from "../article-list/article-list.component";
import { useGetGlobalFeedQuery } from "../../api/repository";
import ReactPaginate from "react-paginate";
import { FEED_PAGE_SIZE } from "../../consts";

import { usePageParam } from "../../hooks/use-search-params.hook";
import { TagCloud } from "../tag-cloud/tag-cloud.component";
import { useSearchParams } from "react-router-dom";
const Feed = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, setPage } = usePageParam();
  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
  };

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get("tag"),
  });
  if (isLoading || isFetching) {
    return <h1 className="text-2xl">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-2xl">Fail to load feed</h1>;
  }

  return (
    <>
      <div className="col-start-1 col-end-10">
        <FeedToggle />
        <ArticleList list={data?.articles || []} />
        <ReactPaginate
          pageCount={Math.ceil(data?.articlesCount || 0) / FEED_PAGE_SIZE}
          pageRangeDisplayed={3}
          previousLabel={null}
          nextLabel={null}
          containerClassName="flex mt-10"
          pageClassName="group"
          pageLinkClassName="p-3 text-conduit-green bg-white border border-conduit-gray-300 -ml-px group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r hover:bg-conduit-gray-200"
          activeClassName="active group"
          activeLinkClassName="group-[.active]:bg-conduit-green group-[.active]:text-white group-[.active]:border-conduit-green"
          onPageChange={handlePageChange}
          forcePage={page}
        />
      </div>
      <div className="ml-4 mt-8 col-start-10 col-end-13 ">
        <TagCloud />
      </div>
    </>
  );
};

export default Feed;
