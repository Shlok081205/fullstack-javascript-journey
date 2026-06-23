import Comp1 from "./Comp1";
import Comp3 from "./Comp3";

function Comp() {
  const num1 = 10;
  const num2 = 20;

  return (
    <div>
      <h1>Comp</h1>
      <Comp1 />
      <p>
        Numbers passed to Comp3: {num1} and {num2}
      </p>
      <Comp3 num1={num1} num2={num2} />
    </div>
  );
}

export default Comp;
