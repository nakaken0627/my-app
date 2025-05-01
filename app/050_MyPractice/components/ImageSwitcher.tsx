// "use client";

// import React, { useState } from "react";

// function ImageSwitcher() {
//   // 画像の状態管理をuseStateでやってみよう
//   const [imageState, setImageState] = useState(
//     "https://iconbu.com/wp-content/uploads/2022/07/%E6%B5%81%E3%82%8C%E6%98%9F%E3%81%95%E3%82%93.png"
//   );

//   const toggleImage = () => {
//     setImageState((prev) =>
//       prev ===
//       "https://iconbu.com/wp-content/uploads/2022/07/%E6%B5%81%E3%82%8C%E6%98%9F%E3%81%95%E3%82%93.png"
//         ? "https://iconbu.com/wp-content/uploads/2022/07/%E6%B5%81%E3%82%8C%E6%98%9F%E3%81%95%E3%82%93.png"
//         : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktCpaLav8uWmGshcGS2TY6bCzM9xWdFDtQq3SZJ64POLMumRGHXGKqXg9oRVA4EgIFuI&usqp=CAU"
//     );
//   };

//   return (
//     <div>
//       <img src={imageState} className="mb-3 mx-auto" />
//       <button
//         onClick={toggleImage}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         画像を切り替える
//       </button>
//     </div>
//   );
// }

// export default ImageSwitcher;
