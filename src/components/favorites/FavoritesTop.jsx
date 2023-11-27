/* eslint-disable react/prop-types */
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

const FavoritesTop = ({ onFavoriteToggle, totalFavQTY, onClearFavorites }) => {
  return (
    <>
      <div className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
        <div className="flex items-center gap-3">
          <div
            className="grid items-center cursor-pointer"
            onClick={onFavoriteToggle}
          >
            <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]" />
          </div>
          <div className="grid items-center">
            <h4 className="text-base font-medium text-slate-900">
              Your Favorites{" "}
              <span className="bg-theme-cart rounded ml-1 px-1 py-0.5 text-slate-100 font-normal text-sm">
                {totalFavQTY} Items
              </span>
            </h4>
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            onClick={onClearFavorites}
            className="rounded bg-theme-cart active:scale-90 p-0.5 text-white px-2 py-1"
          >
            Clear Favorites
          </button>
        </div>
      </div>
    </>
  );
};

export default FavoritesTop;
