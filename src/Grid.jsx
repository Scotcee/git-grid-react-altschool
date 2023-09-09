// import { range } from "./utils";

// // const rangeNum = () => {
// //   return range(numRows, numCols);
// // };
// // function Grid({ numRows, numCols }) {

// // }
// function Grid() {

//   return <div>
//     <h1>the Range is :</h1>
//     <ul>
//       range(1,5).map((number)  (
//           <li key={number}>{number}</li>
//         ))
//       </ul>

//   </div>
// }
//   const rangeNum = () => {
//     return (
//       <div>
//         <>{range(1, 5)}</>
//       </div>
//     );
//   };
//   return (
//     <div className="grid">
//       Using range directly: {rangeNum(1, 5).join(", ")}
//     </div>

function Grid({ numCols, numRows }) {
  const gridItems = [];

  // Create a grid using nested loops
  for (let row = 0; row < numRows; row++) {
    const rowItems = [];
    for (let col = 0; col < numCols; col++) {
      rowItems.push(
        <div key={`${row}-${col}`} className="grid-box">
          {/* You can customize the content of each cell here */}
        </div>
      );
    }
    gridItems.push(
      <div key={row} className="grid-row">
        {rowItems}
      </div>
    );
  }

  return <div className="grid">{gridItems}</div>;
}
export default Grid;
