import Banner from "../../../common/components/banner/banner.component";
import Feed from "../components/feed/feed.component";

const GlobalFeed = () => {
  return (
    <>
      <Banner />
      <div className="container grid grid-cols-12">
        <Feed />
      </div>
    </>
  );
};

export default GlobalFeed;
