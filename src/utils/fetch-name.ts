import { rootURL } from "../env/route.env";

export const fetchData = async () => {
  let name = "no-data";

  await fetch(`${rootURL}/api`, { method: "POST", body: "", cache: 'no-cache' })
    .then(async (res) => {
      const txt = await res.text();
      name = txt;
    })
    .catch(() => {
      console.log("er");
      name = "build data";
    });

  return name;
};
