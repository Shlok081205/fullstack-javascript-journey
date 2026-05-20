/**
 Create a react component. that has array of 10 umbers and display only even numbers
 */

function Mf3() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return <>{arr.filter((num) => num % 2 == 0).join(",")}</>;
}

export default Mf3;
