import { useReducer } from "react";

const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count > 0 ? state.count - 1 : 0 };
    default:
      return state;
  }
};
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h3>UseReducer Example</h3>
      </div>
      <div>Count: {state.count}</div>
      <button type="button" onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
        disabled={state.count === 0}
      >
        Decrement
      </button>
    </>
  );
};

export default UseReducerExample;
