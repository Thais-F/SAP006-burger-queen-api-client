// import React, { useState } from 'react';
// // import Button from "../Button/button";
// import "../../pages/Salao/style.css";
// import { Burger } from "./burger";
// import burger from "../../img/burger.png"



// export function Cardapio({ burgers, setBurgers }) {
//     console.log(burgers)
//     const [order, setOrder] = useState([]);
    
//     function addOrder(e, item) {
//         e.preventDefault();
//         console.log(item);
//         setOrder([
//           ...order,
//           {
//             itemName: item.name,
//             itemPrice: item.price,
//             itemNameKey: item.id,
//             itemQtd: 1,
//           },
//         ]);
//       }

      
// //   const [showMenu, setShowMenu] = useState(true);

//   return (
//     <>
//       <h3 className="topics"> ✨ Hambúrguer Simples </h3>
//       <div className="hamburguers">
//         <img src={burger} className="img-burger" alt="burger" />
//         <div className="options-burger">
//           {burgers &&
//             burgers
//               .slice(0, 3)
//               .map((item) => (
//                 <Burger
//                   divClassName="container-burger"
//                   itemName={item.name}
//                   divId={item.id}
//                   itemPrice={item.price}
//                   itemFlavor={item.flavor}
//                   itemComplement={
//                     item.complement ? ` com ${item.complement}` : null
//                   }
//                   itemNameKey={item.id}
//                   divOnClick={(e) => addOrder(e, item)}
//                 />
//               ))}
//         </div>
//       </div>

//       <h3 className="topics">✨ Hambúrguer simples com queijo </h3>
//       <div className="hamburguers">
//         <img src={burger} className="img-burger" alt="burger" />
//         <div className="options-burger">
//           {burgers &&
//             burgers
//               .slice(3, 6)
//               .map((item) => (
//                 <Burger
//                   divClassName="container-burger"
//                   itemName={item.name}
//                   divId={item.id}
//                   itemPrice={item.price}
//                   itemFlavor={item.flavor}
//                   itemComplement={
//                     item.complement ? ` com ${item.complement}` : null
//                   }
//                   itemNameKey={item.id}
//                   divOnClick={(e) => addOrder(e, item)}
//                 />
//               ))}
//         </div>
//       </div>

//       <h3 className="topics">✨ Hambúrguer simples com ovo </h3>
//       <div className="hamburguers">
//         <img src={burger} className="img-burger" alt="burger" />
//         <div className="options-burger">
//           {burgers &&
//             burgers
//               .slice(6, 9)
//               .map((item) => (
//                 <Burger
//                   divClassName="container-burger"
//                   itemName={item.name}
//                   divId={item.id}
//                   itemPrice={item.price}
//                   itemFlavor={item.flavor}
//                   itemComplement={
//                     item.complement ? ` com ${item.complement}` : null
//                   }
//                   itemNameKey={item.id}
//                   divOnClick={(e) => addOrder(e, item)}
//                 />
//               ))}
//         </div>
//       </div>

//       <h3 className="topics">✨ Hambúrguer Duplo </h3>
//       <div className="hamburguers">
//         <img src={burger} className="img-burger" alt="burger" />
//         <div className="options-burger">
//           {burgers &&
//             burgers
//               .slice(9, 12)
//               .map((item) => (
//                 <Burger
//                   divClassName="container-burger"
//                   itemName={item.name}
//                   divId={item.id}
//                   itemPrice={item.price}
//                   itemFlavor={item.flavor}
//                   itemComplement={
//                     item.complement ? ` com ${item.complement}` : null
//                   }
//                   itemNameKey={item.id}
//                   divOnClick={(e) => addOrder(e, item)}
//                 />
//               ))}
//         </div>
//       </div>

//       <h3 className="topics">✨ Hambúrguer duplo com ovo </h3>
//       <div className="hamburguers">
//         <img src={burger} className="img-burger" alt="burger" />
//         <div className="options-burger">
//           {burgers &&
//             burgers
//               .slice(12, 15)
//               .map((item) => (
//                 <Burger
//                   divClassName="container-burger"
//                   itemName={item.name}
//                   divId={item.id}
//                   itemPrice={item.price}
//                   itemFlavor={item.flavor}
//                   itemComplement={
//                     item.complement ? ` com ${item.complement}` : null
//                   }
//                   itemNameKey={item.id}
//                   divOnClick={(e) => addOrder(e, item)}
//                 />
//               ))}
//         </div>
//       </div>
//       <h3 className="topics">✨ Hambúrguer duplo com queijo </h3>
//       <div className="hamburguers">
//         <img src={burger} className="img-burger" alt="burger" />
//         <div className="options-burger">
//           {burgers &&
//             burgers
//               .slice(15, 18)
//               .map((item) => (
//                 <Burger
//                   divClassName="container-burger"
//                   itemName={item.name}
//                   divId={item.id}
//                   itemPrice={item.price}
//                   itemFlavor={item.flavor}
//                   itemComplement={
//                     item.complement ? ` com ${item.complement}` : null
//                   }
//                   itemNameKey={item.id}
//                   divOnClick={(e) => addOrder(e, item)}
//                 />
//               ))}
//         </div>
//       </div>
//     </>
//   );
// }
