/* eslint-disable react/prop-types */
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { toggleToFavorites } from "../../app/FavoritesSlice";

const FavoritesItem = ({ item }) => {
  const dispatch = useDispatch();

  const onToggleItemToFav = () => {
    dispatch(toggleToFavorites(item));
  };

  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${item.color} ${item.shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}
          >
            <img
              src={item.img}
              alt={`img/cart-item/${item.id}`}
              className="w-36 h-auto object-fill lg:w-28"
            />

            <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">
              ${item.price}
            </div>
          </div>

          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h4 className="font-medium text-lg text-slate-900 lg:text-sm">
                {item.title}
              </h4>

              <p className="text-sm text-slate-800 lg:text-xs">{item.text}</p>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h4 className="text-lg lg:text-base text-slate-900 font-medium">
              ${item.price}
            </h4>
          </div>

          <div className="grid items-center justify-center">
            <button
              type="button"
              className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer"
              onClick={onToggleItemToFav}
            >
              <TrashIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoritesItem;
