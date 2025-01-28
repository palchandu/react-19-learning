import UseActionStateExample from "../components/UseActionStateExample";
import UseOptimistic from "../components/UseOptimistic";
import UseEffectExample from "../components/UseEffectExample";
import UseMemoExample from "../components/UseMemoExample";
import UseReducerExample from "../components/UseReducerExample";
const HooksExmaple = () => {
  return (
    <>
      <h3>Hooks Exmaple</h3>
      <div className="hook-content d-flex justify-content-between align-item-start" style={{width: "100%",backgroundColor: "#f5f5f5",padding: "20px"}}>
        <div className="left-content" style={{width: "50%"}}>
          <UseOptimistic />
          <UseActionStateExample />
        </div>
        <div className="right-content" style={{width: "50%"}}>
          <UseEffectExample />
          <UseMemoExample />
          <UseReducerExample />
        </div>
      </div>
    </>
  );
};

export default HooksExmaple;
