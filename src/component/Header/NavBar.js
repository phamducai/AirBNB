import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import styles from "./NavBar.module.css";
import clsx from "clsx";
import logo from "../../assets/logo/long-logo.png";
import ProfileMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "component/MobileSearchBar/MobileSearchBar";

export default function NavBar() {
  return (
    <header>
      <nav className="">
        <img src={logo} className={clsx(styles.navbar_logo)} alt="" />
        <div className={clsx(styles.search_bar)}>
          <div className={clsx(styles.search_bar_text)}> Địa điểm bất kì</div>
          <div className={clsx(styles.search_bar_text)}> Tuần bất kì</div>
          <div className={clsx(styles.search_bar_text2)}> Thêm Khách</div>
          <div
            className="flex items-center justify-center   bg-[#ff385c] text-white"
            style={{ borderRadius: "50%", padding: "0.3rem" }}
          >
            <FiSearch />
          </div>
        </div>
        <div className={clsx(styles.profile_container)}>
          <div
            className={clsx(
              styles.airbnb_your_home,
              "hidden md:flex items-center"
            )}
          >
            Cho thuê chỗ ở qua AirBnB <TbWorld className="world mx-3" />
          </div>
          <div>
            <ProfileMenu />
          </div>
        </div>
      </nav>
      <MobileSearchBar />
      <SimpleBottomNavigation />
    </header>
  );
}

// export default function NavBar() {
//   return (
//     <header>
//       <nav
//         className="flex justify-between items-center text-lg px-0 sm:px-20 "
//         style={{
//           borderBottom: "1px solid #8080801f",
//           height: "80px",
//         }}
//       >
//         {/* left */}
//         <div className="logo  ">
//           <img src={logo} width={100} alt="" />
//         </div>
//         {/* middle */}
//         <div
//           className="order hidden md:flex justify-center items-center relative border rounded-full "
//           style={{
//             border: "1px solid #e5e7eb",
//             position: "relative",
//             boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
//             fontSize: "15px",
//           }}
//         >
//           <input
//             type="search"
//             placeholder=""
//             style={{ border: " 0px solid" }}
//             className="py-2.5 w-[370px] rounded-full  "
//           />

//           <div className="absolute  mr-2">
//             <button
//               style={{
//                 backgroundColor: "transparent",
//                 border: "none",
//                 cursor: "pointer",
//                 fontWeight: "500",
//               }}
//             >
//               Địa điểm bất kì
//             </button>
//             <span
//               style={{
//                 verticalAlign: "sub",
//                 backgroundColor: "#e5e7eb",
//                 width: "1px",
//                 display: "inline-block",
//                 height: "24px",
//               }}
//             ></span>
//             <button
//               className="mx-1"
//               style={{
//                 backgroundColor: "transparent",
//                 border: "none",
//                 cursor: "pointer",
//                 fontWeight: "500",
//               }}
//             >
//               Tuần bất kì
//             </button>
//             <span
//               style={{
//                 verticalAlign: "sub",
//                 backgroundColor: "#e5e7eb",
//                 width: "1px",
//                 display: "inline-block",
//                 height: "24px",
//               }}
//             ></span>
//             <button
//               className="mx-2 text-gray-500"
//               style={{
//                 backgroundColor: "transparent",
//                 border: "none",
//                 cursor: "pointer",
//                 fontWeight: "500",
//               }}
//             >
//               Thêm Khách
//             </button>
//           </div>
//           <div
//             className="bg-[#ff385c] text-white rounded-full mr-2"
//             style={{ padding: "4px 10px", cursor: "pointer" }}
//           >
//             <FiSearch />
//           </div>
//         </div>
//         {/* Right */}
//         <div className="mr-4 sm:mr-0 login flex scroll-m-52 items-center font-semibold text-gray-600  ">
//           <div className={clsx("hidden lg:block mb-0 mr-2", styles.rent)}>
//             Cho thuê chỗ qua AirBnB <TbWorld className="world mx-3" />
//           </div>
//           <div
//             className="flex gap-2 "
//             style={{
//               border: "1px solid #e5e7eb",
//               borderRadius: "40px",
//               padding: "10px 10px 10px 12px",
//               boxShadow:
//                 "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
//             }}
//           >
//             <FiMenu />
//             <AiOutlineUser />
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
