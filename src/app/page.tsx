import { SignInFunction } from "../actions/sign-in/sign-in.action";

export default function Home() {
  return (
    <main className="text-center">
      <h1>Script vs server action buttons</h1>
      <p>Check server log for second button</p>
      <div className="container w-3/5 py-5 flex gap-2">
      <button
        data-provider="google"
        className="p-2 rounded-md mx-auto bg-blue-500 text-white click-btn"
      >
        Click JS me
      </button>
      <form action={SignInFunction}>
        <input type="hidden" value="google" name="provider" />
        <button
          type="submit"
          data-provider="google"
          className="p-2 rounded-md mx-auto bg-blue-500 text-white"
        >
          Click SSR me
        </button>
      </form>
      </div>
    </main>
  );
}
