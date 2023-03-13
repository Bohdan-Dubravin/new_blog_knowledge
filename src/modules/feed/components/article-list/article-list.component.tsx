// import { FeedArticle } from "../../api/dto/global-feed.in";
import Article from "../article/article.components";

// interface ArticleListProps {
//   list: FeedArticle[];
// }

const ArticleList = () => {
  return (
    <div>
      {/* {list.map((article) => (
        <Article key={article.slug} {...article} />
      ))} */}
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  );
};

export default ArticleList;
