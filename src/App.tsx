import { Route, Routes } from "react-router-dom";
import Header from "./common/components/header/header.component";
import GlobalFeed from "./modules/feed/pages/global-feed.page";
import ProfilePage from "./modules/profile/pages/profile.page";

function App() {
  return (
    <div className="mb-16">
      <Header />
      <Routes>
        <Route path="/" element={<GlobalFeed />} />
        <Route path="/:profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
