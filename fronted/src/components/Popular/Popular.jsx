// import React, { useState ,useEffect} from "react";
// import "./popular.css";
// import Item from "../Item/Item";
// const Popular = () => {
//   const [popular, setPopular] = useState([]);

//   useEffect(() => {
//     fetch("localhost:3000/popular")
//       .then((res) => res.json())
//       .then((data) => setPopular(data));
//   });

//   return (
//     <div className="popular">
//       <h1>Popular items for women</h1>
//       <div className="popular-items">
//         {popular.map((item, i) => {
//           return (
//             <Item
//               key={i}
//               id={item.id}
//               name={item.name}
//               image={item.image}
//               new_price={item.new_price}
//               old_price={item.old_price}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Popular;
