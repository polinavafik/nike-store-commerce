import { useDispatch, useSelector } from "react-redux";
import {
  selectTotalFavQTY,
  selectFavoritesState,
  selectFavoritesItems,
  setCloseFavorites,
  clearFavorites,
  setTotalFav,
} from "../app/FavoritesSlice.js";

import FavoritesEmpty from "./favorites/FavoritesEmpty";
import FavoritesItem from "./favorites/FavoritesItem";
import FavoritesTop from "./favorites/FavoritesTop.jsx";
import { useEffect } from "react";

const Favorites = () => {
  const dispatch = useDispatch();
  const ifFavoritesState = useSelector(selectFavoritesState);
  const favoritesItems = useSelector(selectFavoritesItems);
  const totalFavQTY = useSelector(selectTotalFavQTY);

  useEffect(() => {
    dispatch(setTotalFav());
  }, [favoritesItems, dispatch]);

  const onFavoriteToggle = () => {
    dispatch(
      setCloseFavorites({
        favoritesState: false,
      })
    );
  };

  const onClearFavorites = () => {
    dispatch(clearFavorites());
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
          ifFavoritesState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
            ifFavoritesState
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-8"
          }`}
        >
          <FavoritesTop
            totalFavQTY={totalFavQTY}
            onFavoriteToggle={onFavoriteToggle}
            onClearFavorites={onClearFavorites}
          />
          {favoritesItems?.length === 0 ? (
            <FavoritesEmpty onFavoriteToggle={onFavoriteToggle} />
          ) : (
            <div>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[90vh] scroll-smooth scroll-hidden py-3">
                {favoritesItems?.map((item, i) => (
                  <FavoritesItem key={i} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
