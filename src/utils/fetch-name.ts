import { rootURL } from "../env/route.env";

export const fetchData = async (props?: RequestInit) => {
  const url = `${rootURL}/api`;
  return fetch(url, props)
    .then(async (res) => await res.text())
    .catch((e) => {
      console.log("er", url, e.message);
      return "build error data";
    });
};
