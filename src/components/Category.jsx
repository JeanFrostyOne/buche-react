import React from "react";
import { categories } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterReducer";

export default function Category() {
  const dispatch = useDispatch();

  const { categoryId } = useSelector((state) => state.filter);

  return (
    <div className="category-container">
      <p>категории</p>
      <ul>
        {categories.map((category) => {
          return (
            <li
              className={
                categoryId === category.id ? "category-active" : "category"
              }
              onClick={() => dispatch(setCategoryId(category.id))}
            >
              {category.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
