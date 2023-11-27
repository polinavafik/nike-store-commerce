import {
  Cart,
  FlexContent,
  Footer,
  Hero,
  Header,
  Sales,
  Stories,
} from "./components";
import Favorites from "./components/Favorites.jsx";
import {
  heroapi,
  popularsales,
  topratesales,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data.js";

const App = () => {
  return (
    <>
      <Header />
      <Cart />
      <Favorites />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales content={popularsales} ifExists />
        <FlexContent content={highlight} ifExists />
        <Sales content={topratesales} />
        <FlexContent content={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
