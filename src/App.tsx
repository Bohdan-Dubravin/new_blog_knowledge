import Banner from "./common/components/banner/banner.component";
import Header from "./common/components/header/header.component";
import Feed from "./modules/feed/components/feed/feed.component";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="container grid grid-cols-12">
        <Feed />
        <div className="col-start-10 col-end-13">sdfsdf</div>
      </div>
    </div>
  );
}

export default App;
