import FeedToggle from '../feed-toggle/feed-toggle.component';
import ArticleList from '../article-list/article-list.component';
import { useGetGlobalFeedQuery } from '../../api/repository';

const Feed = () => {
  const { data, error, isLoading } = useGetGlobalFeedQuery('');

  if (isLoading) {
    return <h1 className="text-2xl">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-2xl">Fail to load feed</h1>;
  }

  return (
    <div className="col-start-1 col-end-10">
      <FeedToggle
        items={[
          { text: 'main', link: 'main' },
          { text: 'Popular', link: 'Popular' },
        ]}
      />
      <ArticleList list={data?.articles || []} />
    </div>
  );
};

export default Feed;
