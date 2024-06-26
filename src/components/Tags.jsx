import React from "react";
import { tags } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setTag } from "../redux/slices/filterReducer";

export default function Tags() {
  const dispatch = useDispatch();

  const { tags: tagsRedux } = useSelector((state) => state.filter);

  function isActive(id) {
    let currentTag = tagsRedux.find((tag) => {
      return tag.id === id;
    });
    return currentTag;
  }

  return (
    <div className="tags-container">
      {tags.map((tag) => {
        return (
          <button
            onClick={() => dispatch(setTag(tag))}
            key={tag.id}
            className={
              isActive(tag.id) ? "category-btn tag-active" : "category-btn"
            }
          >
            {tag.name}
          </button>
        );
      })}
    </div>
  );
}
