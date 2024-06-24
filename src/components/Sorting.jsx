import React from "react";
import { sorting } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setSort } from "../redux/slices/filterReducer";

export default function Sorting() {
  const dispatch = useDispatch();
  return (
    <div>
      {sorting.map((sort) => {
        return (
          <div className="sort" onClick={() => dispatch(setSort(sort))} key={sort.id}>
            {sort.name}
          </div>
        );
      })}
    </div>
  );
}
