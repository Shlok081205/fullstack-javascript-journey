/*Write React code torender a component with the following Data.
1.Heading in italics,blue color and font size 25px 
2.An Orddered list of 3 flowers numbering starts with Capital Letter A and list should be in red color
*/

function Comp1() {
  return (
    <div>
      <h1 style={{ fontStyle: "italic", color: "blue", fontSize: "25px" }}>
        Beautiful Flowers
      </h1>

      <ol type="A" style={{ color: "red" }}>
        <li>Rose</li>
        <li>Lily</li>
        <li>Tulip</li>
      </ol>
    </div>
  );
}

export default Comp1;
