"use client";
import { FC, useState } from "react";
import { fetchData } from "../utils/fetch-name";

export const ClientButton: FC<{ data: string }> = ({ data }) => {
  const [state, setState] = useState(true);
  const [sData, setData] = useState(data);
  const handleClick = () => {
    setState((old) => !old);
    // window.location.replace('/problem');
    // fetchData().then(setData);
  }
  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-md bg-${state ? "blue" : "red"}-500 text-white`}
    >
      with onClick - {sData}
    </button>
  );
};
