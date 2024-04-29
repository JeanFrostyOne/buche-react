import React from "react";
import { tags } from "../utils/constants";

export default function Tags() {
  return (
    <div className="tags-container">
      {tags.map((tag) => {
        return (
          <button key={tag.id} className="category-btn">
            {tag.name}
          </button>
        );
      })}
    </div>
  );
}
