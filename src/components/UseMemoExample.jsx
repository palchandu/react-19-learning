import { useState, useMemo } from "react";
const arrayList = [1, 2, 3, 4, 5];
const computeExpensiveValue = (value) => {
  console.log("Computing Expensive Value");
  return arrayList.reduce((acc, curr) => acc + curr, value);
};
const UseMemoExample = () => {
  const [value, setValue] = useState(0);
  const [calculateValue, setCalculateValue] = useState(0);
  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };
    const handleCalculate = () => { 
    setCalculateValue(value);
    }
  const memoizedValue = useMemo(
    () => computeExpensiveValue(calculateValue),
    [calculateValue]
  );
  return (
    <>
      <div>
        <h3>UseMemo Example</h3>
      </div>
      <div>Value: {memoizedValue}</div>
      <input type="number" onChange={handleChange} />
      <button type="button" onClick={handleCalculate}>
        Calculate
      </button>
    </>
  );
};

export default UseMemoExample;
