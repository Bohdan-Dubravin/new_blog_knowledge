import { Link } from "react-router-dom";
import { ArticleAuthor } from "../article-author/article-author.component";
import FavoriteButton from "../favorite-button/favorite-button.component";
import { TagList } from "../tag-list/tag-list.component";
import { FeedArticle } from "../../api/dto/global-feed.in";

interface ArticleProps extends FeedArticle {}

const Article = ({
  author,
  title,
  description,
  tagList,
  favoritesCount,
  slug,
  favorited,
  createdAt,
}: ArticleProps) => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex justify-between">
          <ArticleAuthor {...author} publishedAt={createdAt} />
          <FavoriteButton
            count={favoritesCount}
            slug={slug}
            isFavorited={favorited}
          />
        </div>
        <Link to={`/article/}`} className="hover:no-underline">
          <h1 className="mb-1 font-semibold text-2xl text-conduit-gray-1000">
            {title}
          </h1>
          <p className="text-conduit-gray-700 font-light mb-1">{description}</p>
          <div className="flex justify-between">
            <span className="text-conduit-gray-500 text-date font-light">
              Read more...
            </span>
            <TagList list={tagList} />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Article;
