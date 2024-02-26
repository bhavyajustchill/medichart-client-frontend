

// import React from "react";
// import navItems from "../helpers/navItems";
// import { Link } from "react-router-dom";

// export default function Header() {
//   const links = navItems();
  
//   // Function to render sub items
//   const renderSubItems = (subItems) => {
//     return (
//       <>
//         {subItems.map((subItem, index) => (
//           <li key={index}>
//             <Link className="btn btn-ghost" to={subItem.link}>
//               {subItem.label}
//             </Link>
//           </li>
//         ))}
//       </>
//     );
//   };

//   return (
//     <div className="w-full flex bg-white text-black-content ">
//       <div className="flex-none lg:hidden ">
//         <label
//           htmlFor="my-drawer-3"
//           aria-label="open sidebar"
//           className="btn btn-square btn-ghost"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             className="inline-block w-6 h-6 stroke-current"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16M4 18h16"
//             ></path>
//           </svg>
//         </label>
//       </div>
//       <Link to="/" className="flex justify-center items-center px-2 mx-2">
//         <b className="text-2xl">Health Card</b>
//       </Link>
//       <div className="flex-1 justify-center items-center hidden lg:block ">
//         <ul className="menu menu-horizontal flex justify-center">
//           {links.map((navItem, index) => (
//             <li key={index}>
              
//               {navItem.subItems ? (
//                 <details>
//                   <summary>
//                     <span className="flex items-center justify-center">
//                       {navItem.label} 
//                     </span>
//                   </summary>
//                   <ul className="p-2 bg-base-100 rounded-t-none">
//                     {renderSubItems(navItem.subItems)}
//                   </ul>
//                 </details>
//               ) : (
//                 <Link className="btn btn-ghost btn-sm" to={navItem.link}>
//                   {navItem.label}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }


import React from "react";
import navItems from "../helpers/navItems";
import { Link } from "react-router-dom";

export default function Header() {
  const links = navItems();
  
  // Function to render sub items
  const renderSubItems = (subItems) => {
    return (
      <>
        {subItems.map((subItem, index) => (
          <li key={index}>
            <Link className="btn btn-ghost" to={subItem.link}>
              {subItem.label}
            </Link>
          </li>
        ))}
      </>
    );
  };

  return (
    <div className="w-full flex bg-white text-black-content">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <Link to="/" className="flex justify-center items-center px-2 mx-2">
        <b className="text-2xl">Health Card</b>
      </Link>
      <div className="flex-1 justify-center items-center hidden lg:block">
        <ul className="menu menu-horizontal flex justify-center">
          {links.map((navItem, index) => (
            <li key={index}>
              
              {navItem.subItems ? (
                <details>
                  <summary>
                    <span className="flex items-center justify-center">
                      {navItem.label} 
                    </span>
                  </summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    {renderSubItems(navItem.subItems)}
                  </ul>
                </details>
              ) : (
                <button className="btn btn-primary btn-sm">
                  <Link to={navItem.link}>
                    {navItem.label}
                  </Link>
                </button>
              )
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

