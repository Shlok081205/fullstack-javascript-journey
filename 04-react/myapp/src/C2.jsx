import { Fname, Lname } from "./Pc";
import { useContext } from "react";

function C2() {
  const fname = useContext(Fname);
  const lname = useContext(Lname);

  return (
    <div>
      <h2>
        Welcome {fname} {lname}
      </h2>
    </div>
  );
}

export default C2;
