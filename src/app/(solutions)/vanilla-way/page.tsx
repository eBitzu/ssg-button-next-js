import { fetchData } from "../../../utils/fetch-name";
import { VanillaPre } from "./constants";

export default async function Solution1() {
  const data = await fetchData();
  return (
    <>
      <button
        id="click-btn"
        value="blue"
        className="p-2 rounded-md bg-blue-500 text-white"
      >
        with JS event listener - {data}
      </button>
      <pre className="text-left mx-auto w-1/2 mt-3">
        {VanillaPre}
      </pre>
    </>
  );
}
