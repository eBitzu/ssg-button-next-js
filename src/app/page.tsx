import { SignInFunction } from "../actions/sign-in/sign-in.action";

export default async function Home() {
  const color = (await fetch('http://localhost:3000/color').then(res => res.text()));
  return (
    <main className="text-center">
      <h1>Different ways of doing SSR buttons with Next.js</h1>

      <div className="container w-3/5 py-5 flex gap-4 justify-center">
        <button
          data-provider="google"
          className="p-2 rounded-md bg-red-500 text-white click-btn"
        >
          with JS event listener
        </button>
        <div id="btn-wrap">
          <button
            className="p-2 rounded-md bg-blue-500 text-white"
            name="btn-color"
            value="blue"
            hx-post="/api"
            hx-swap="outerHTML"
          >
            with htmx
          </button>
        </div>

        <form action={SignInFunction}>
          <input type="hidden" value={color} name="color" />
          <button
            type="submit"
            className={`p-2 rounded-md bg-${color}-500 text-white`}
          >
            with RS action
          </button>
        </form>
      </div>
    </main>
  );
}
