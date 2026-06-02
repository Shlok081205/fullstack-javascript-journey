import { useReducer } from "react";

function reducer(state, action) {
  return state + action;
}
function Ur2() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div align="center">
      <h1>{state}</h1>
      <button onClick={dispatch(1)}>Increase</button>
      <button onClick={dispatch(-1)}>Decrease</button>
    </div>
  );
}

export default Ur2;
