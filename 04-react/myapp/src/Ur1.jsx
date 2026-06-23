import { useReducer } from "react";

function reducer(state, action) {
  return state + action;
}
function Ur1() {
  const [state, dispatch] = useReducer(reducer, 20);
  return (
    <div align="center">
      <h1>{state}</h1>
      <button onClick={dispatch(5)}>Click</button>
    </div>
  );
}

export default Ur1;
