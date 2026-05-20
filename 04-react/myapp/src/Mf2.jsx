/*
create a react component that contains an array of 10 numbers multiply this number by 5 and display updated values
*/

function Mf2() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return <>{arr.map((num) => num * 5).join(",")}</>;
}

export default Mf2;
