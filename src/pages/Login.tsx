import { FormEvent, useState, useContext } from "react";
import { UserContext } from "../context/userContext";

export function Login() {
  const { newUser } = useContext(UserContext);
  const [user, setUser] = useState("");

  const createNewUser = (event: FormEvent) => {
    event.preventDefault();
    newUser(user);
  };

  return (
    <main className="w-full h-screen bg-primary flex flex-col items-center">
      <div className="flex flex-col items-center gap-3 bg-secondary sm:max-w-[310px] sm:w-full max-w-[500px] w-full rounded border-4 border-white mt-[200px]">
        <span className="text-white mt-5 text-xl">Type your name</span>
        <form onSubmit={createNewUser} className="flex flex-col gap-3 mb-5">
          <input
            type="text"
            className="p-1"
            onChange={(event) => setUser(event.target.value)}
            required
          />
          <button type="submit" className="text-white bg-tertiary rounded p-2">
            See cards
          </button>
        </form>
      </div>
    </main>
  );
}
