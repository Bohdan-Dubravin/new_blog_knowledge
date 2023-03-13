import { Link } from "react-router-dom";
import { ArticleAuthor } from "../article-author/article-author.component";
import FavoriteButton from "../favorite-button/favorite-button.component";
import { TagList } from "../tag-list/tag-list.component";

const tagList = ["article", "main", "popular"];

const Article = () => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex justify-between">
          <ArticleAuthor />
          <FavoriteButton
          // count={favoritesCount}
          // slug={slug}
          // isFavorited={favorited}
          />
        </div>
        <Link to={`/article/}`} className="hover:no-underline">
          <h1 className="mb-1 font-semibold text-2xl text-conduit-gray-1000">
            {/* {title} */}If we quantify the alarm, we can get to the FTP pixel
            through the online SSL interface!
          </h1>
          <p className="text-conduit-gray-700 font-light mb-1">
            Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut
            cupiditate est facere omnis possimus. Tenetur similique nemo illo
            soluta molestias facere quo. Ipsam totam facilis delectus nihil
            quidem soluta vel est omnis.
          </p>
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
