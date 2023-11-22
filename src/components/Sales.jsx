/* eslint-disable react/prop-types */
import Item from "./utils/Item";
import Title from "./utils/Title";

const Sales = ({ ifExists, content: { title, items } }) => {
  return (
    <>
      <section className="nike-container">
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
            ifExists
              ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          }`}
        >
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Sales;
