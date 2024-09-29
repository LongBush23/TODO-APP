import { useMemo } from "react";
import { CATEGORY_ITEM } from "../constants";
import "./CategoryList.css";
import { useAppContext } from "../context/AppProvider";
import PropTypes from "prop-types";

const CategoryList = () => {
  const { selectedCategoryId, setSelectedCategoryId, todoList } =
    useAppContext();

  const countByCategory = useMemo(() => {
    return todoList.reduce(
      (acc, cur) => {
        return { ...acc, [cur.category]: acc[cur.category] + 1 };
      },
      {
        personal: 0,
        company: 0,
        travel: 0,
        idea: 0,
      }
    );
  }, [todoList]);

  return (
    <div>
      <p>Categories</p>
      <div>
        {CATEGORY_ITEM.map((category) => {
          return (
            <div
              key={category.id}
              className={`category-item ${
                category.id === selectedCategoryId ? `selected` : ""
              }`}
              onClick={() => setSelectedCategoryId(category.id)}
            >
              <p className="category-name">{category.label}</p>
              <p>{countByCategory[category.id]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

CategoryList.propTypes = {
  todoList: PropTypes.array,
};
export default CategoryList;
