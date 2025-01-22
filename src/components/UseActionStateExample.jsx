import { useActionState } from "react";
import { useState } from "react";
const UseActionStateExample = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // handle useActionState inside handleLogin function
  const { isPending, error, run } = useActionState(async () => {
    if (username === "admin" && password === "admin") {
      // use setTimeout to simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Login successful");
    } else {
      throw new Error("Invalid credentials");
    }
  });
  const handleLogin = () => {
    run();
  };
  return (
    <>
      <h5>UseActionState Hook</h5>
      {/** login functionality using useActionState */}
      <div className="form-group card d-flex flex-column align-items-center mt-3 mb-3 w-50 border border-primary p-3 rounded gap-3">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={handleLogin}
          disabled={isPending}
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
        {error && <p className="text-danger">{error}</p>}
      </div>
    </>
  );
};

export default UseActionStateExample;
