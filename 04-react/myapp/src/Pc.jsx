import { createContext } from "react";
import C1 from "./C1";

const Fname = createContext();
const Lname = createContext();

function PC() {
  return (
    <div>
      <Fname.Provider value="Shlok">
        <Lname.Provider value="Patel">
          <C1 />
        </Lname.Provider>
      </Fname.Provider>
    </div>
  );
}

export default PC;
export { Fname, Lname };
