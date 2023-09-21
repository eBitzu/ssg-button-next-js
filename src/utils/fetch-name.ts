import { rootURL } from "../env/route.env";

export const fetchData = async () => {
  let name = "no-data";

  await fetch(`${rootURL}/api`, { method: "POST", body: "" })
    .then(async (res) => {
      const txt = await res.text();
      name = txt;
    })
    .catch((er) => {
      console.log("er");
      name = "error data";
    });

  return name;
};
