import UseTransitionExample from "../components/UseTransitionExample";
const ActionsExample = () => {
  return (
    <div>
      <h5 className="text-center">Action Example</h5>
      <p>
        {`This statement refers to a convention in application design and state
        management where functions that handle asynchronous operations (like
        making API calls, handling side effects, or triggering async state
        transitions) are given the name "Actions."`}
      </p>
      <UseTransitionExample />
    </div>
  );
};

export default ActionsExample;
