import { SignInFunction } from "../actions/sign-in/sign-in.action";
import { ButtonServer } from "../components/button.server";

export default async function Home() {
  return (
    <main className="text-center">
      <h1>Different ways of doing SSR buttons with Next.js</h1>

      <div className="container w-3/5 py-5 flex gap-4 justify-center">
        <button id="click-btn" className="p-2 rounded-md bg-red-500 text-white">
          with JS event listener
        </button>
        <button
          className="p-2 rounded-md bg-blue-500 text-white"
          name="btn-color"
          value="blue"
          hx-post="/api"
          hx-swap="outerHTML"
        >
          with htmx
        </button>
        <ButtonServer />
      </div>
      <section className="text-left pl-10 mt-4">
        <p>
          <strong>Explanations:</strong>
        </p>
        <p>
          On first button the state is held on client side and a js script
          handles the change
        </p>
        <p>
          On the second button the state is held on client, but htmx requests a
          new button with a new state on btn click
        </p>
        <p>
          On the third button the state is held on server, rendered on client,
          changed using a react server action and page revalidated
        </p>
      </section>
    </main>
  );
}
