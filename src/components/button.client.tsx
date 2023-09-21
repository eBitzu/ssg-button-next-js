"use client";
import { FC, useState } from "react";

export const ClientButton: FC<{ data: string }> = ({ data }) => {
  const [state, setState] = useState(true);
  const handleClick = () => {
    setState((old) => !old);
    // window.location.reload();
  }
  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-md bg-${state ? "blue" : "red"}-500 text-white`}
    >
      With on click - {data}
    </button>
  );
};
