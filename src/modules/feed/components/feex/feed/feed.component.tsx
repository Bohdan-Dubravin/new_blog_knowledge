import FeedToggle from "../../feed-toggle/feed-toggle.component";
import ArticleList from "../../article-list/article-list.component";

const Feed = () => {
  return (
    <div className="col-start-1 col-end-10">
      <FeedToggle
        items={[
          { text: "main", link: "main" },
          { text: "Popular", link: "Popular" },
        ]}
      />
      <ArticleList />
    </div>
  );
};

export default Feed;
