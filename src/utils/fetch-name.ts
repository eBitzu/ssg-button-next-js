import { rootURL } from "../env/route.env";

export const fetchData = async () => {
  let name = "no-data";
  const url = `${rootURL}/api`;
  await fetch(url, { cache: 'no-cache' })
    .then(async (res) => {
      const txt = await res.text();
      name = txt;
    })
    .catch((e) => {
      console.log("er", url, e.message);
      name = "build data";
    });

  return name;
};
