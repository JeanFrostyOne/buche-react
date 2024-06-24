import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/filterReducer";
import { debounce } from "@mui/material";

export default function Search() {
  const { search } = useSelector((state) => state.filter);

  const [inputValue, setInputValue] = useState(search);
  const dispatch = useDispatch();

  const memoSearch = useCallback(
    debounce((value) => {
      dispatch(setSearch(value));
    }, 500),
    []
  );
  useEffect(() => {
    memoSearch(inputValue);
  }, [inputValue]);

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
    </div>
  );
}
