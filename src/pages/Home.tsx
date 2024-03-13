import ArticlesSection from "../components/ArticlesSection";
import Banner from "../components/Banner";
import Main from "../components/Main";
import PrayerBanner from "../components/PrayerBanner";

const Home = () => {
  return (
    <>
      <Main />
      <PrayerBanner />
      <Banner />
      <div className="gap-3 d-flex">
        <ArticlesSection />
        <ArticlesSection />
      </div>
    </>
  );
};

export default Home;
