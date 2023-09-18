import { SignInFunction } from "../actions/sign-in/sign-in.action";

const URL = process.env.NODE_ENV == 'development' ? "http://localhost:3000" : ''

export async function ButtonServer() {
  const color = await fetch(`${URL}/color`)
    .then((res) => res.text())
    .catch((er) => {
      console.log("got an error here", er);
      return "blue";
    });
  return (
    <form action={SignInFunction}>
      <input type="hidden" value={color} name="color" />
      <button
        type="submit"
        className={`p-2 rounded-md bg-${color}-500 text-white`}
      >
        with RS action
      </button>
    </form>
  );
}
