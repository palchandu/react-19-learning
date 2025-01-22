import { useTransition, useState } from "react";

const UseTransitionExample = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  async function updateName() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
  const handleSubmit = () => {
    startTransition(async () => {
      if (name === "") {
        setError("Name is required");
      } else {
        const error = await updateName();
        if (error) {
          setError(error);
        }
        setError("");
      }
    });
  };
  return (
    <>
      <div>
        {" "}
        <h6 className="text-center">UseTransitionExample</h6>
      </div>
      <div className="form-group card d-flex flex-column align-items-center mt-3 mb-3 w-50 mx-auto border border-primary p-3 rounded gap-3">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={isPending}
        >
          Update
        </button>
        {error && <p>{error}</p>}
      </div>
    </>
  );
};

export default UseTransitionExample;
