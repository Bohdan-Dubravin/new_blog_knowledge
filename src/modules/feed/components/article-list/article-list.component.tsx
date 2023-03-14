import { FeedArticle } from "../../api/dto/global-feed.in";
import Article from "../article/article.components";
import ReactPaginate from "react-paginate";
import { FEED_PAGE_SIZE } from "../../consts";

interface ArticleListProps {
  list: FeedArticle[];
}

const ArticleList = ({ list }: ArticleListProps) => {
  return (
    <div>
      {list.map((article) => (
        <Article key={article.slug} {...article} />
      ))}
    </div>
  );
};

export default ArticleList;
