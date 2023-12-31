/* eslint-disable react/prop-types */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import Title from "./utils/Title";
import { truncate } from "lodash";

const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <section className="nike-container mb-11">
      <Title title={title} />
      <div className="mt-7">
        <Splide options={splideOptions}>
          {news.map((newsItem, i) => (
            <SplideSlide key={i} className="mb-0.5">
              <article className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                <div className="flex items-center justify-center">
                  <img
                    src={newsItem.img}
                    alt={`img/story/${i}`}
                    className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                  />
                </div>
                <div className="flex items-center justify-between w-full px-4">
                  <div className="flex items-center gap-0.5">
                    <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                    <span className="text-xs font-bold">{newsItem.like}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <ClockIcon className="icon-style w-4 h-4 text-black" />
                    <span className="text-xs font-bold">{newsItem.time}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <HashtagIcon className="icon-style text-blue-600" />
                    <span className="text-xs font-bold text-blue-600">
                      {newsItem.by}
                    </span>
                  </div>
                </div>
                <div className="grid items-center justify-items-start px-4">
                  <h4 className="text-base font-semibold lg:text-sm">
                    {newsItem.title}
                  </h4>
                  <p className="text-sm text-justify lg:text-xs">
                    {truncate(newsItem.text, { length: 175 })}
                  </p>
                </div>
                <div className="flex items-center justify-center px-4 w-full">
                  <a
                    href={newsItem.url}
                    target="_blank"
                    role={"button"}
                    className="w-full bg-gradient-to-b from-slate-900 to-black text-center text-slate-100 py-1.5 button-theme"
                    rel="noreferrer"
                  >
                    {newsItem.btn}
                  </a>
                </div>
              </article>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Stories;
