"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


type Product = {
  name: string;
  brand: string;
  price: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: string;
  category: string;
  product_type: string;
  tag_list: string[];
  api_featured_image: string;
  product_colors: { hex_value: string; colour_name: string }[];
};

const getProductData = async () => {
  const res = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json"
  );
  return res.json();
};

export default function Products() {
  const [productData, setProductData] = useState<Product[]>([]);
  const [showColorList, setShowColorList] = useState<boolean[]>(
    new Array(100).fill(false)
  );

  useEffect(() => {
    async function fetchData() {
      const data = await getProductData();
      setProductData(data);
    }

    fetchData();
  }, []);

  const toggleColorList = (index: number) => {
    const newShowColorList = [...showColorList];
    newShowColorList[index] = !newShowColorList[index];
    setShowColorList(newShowColorList);
  };

  function StarRating(rating: string ) {
    const numOfStars = parseFloat(rating);

    return Array.from({length: 5}, (_, index) => (
        <FontAwesomeIcon
            key={index}
            icon={index < numOfStars ? faStar : ["far", "star"]}
            className="text-yellow-500 text-xs-500"
        />
    ))
  }


  return (
    <div className="mt-[200px]">
      <h1 className="font-bold text-center uppercase text-3xl">
        Product Details
      </h1>
      {productData.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productData.map((product, index) => (
            <li key={index} className="bg-white rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="mb-2">Description: {product.description}</p>
              <p className="mb-2">Price: {product.price}</p>

              <img
                src={product.api_featured_image}
                alt={product.name}
                className="max-w-full h-auto mb-2"
              />

              <p className="mb-2">Tag List: {product.tag_list.join(", ")}</p>
              <p className="mb-2">
                Rating:
                {StarRating(product.rating)}
              </p>
              <p className="mb-2">Category: {product.category}</p>
              <p className="mb-2">Product Type: {product.product_type}</p>
              <p className="mb-2">Brand: {product.brand}</p>
              <p className="mb-2">
                Product Link:{" "}
                <a
                  href={product.product_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {product.product_link}
                </a>
              </p>
              <p className="mb-2">
                Website Link:{" "}
                <a
                  href={product.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {product.website_link}
                </a>
              </p>

              {/* Dropdown menu for product colors */}
              {product.product_colors && product.product_colors.length > 0 && (
                <div className="relative mt-4">
                  <button
                    onClick={() => toggleColorList(index)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md w-full text-left"
                  >
                    Product Colors
                  </button>
                  {showColorList[index] && (
                    <ul className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-md">
                      {product.product_colors.map((color, colorIndex) => (
                        <li key={colorIndex} className="p-2">
                          <div className="flex items-center">
                            <span
                              className="inline-block w-4 h-4 mr-2"
                              style={{
                                backgroundColor: `#${color.hex_value}`,
                              }}
                            ></span>
                            <p>Hex Value: {color.hex_value}</p>
                          </div>
                          <p>Color Name: {color.colour_name}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}
// import { useEffect, useState } from "react";

// type Product = {
//   name: string;
//   brand: string;
//   price: string;
//   product_link: string;
//   website_link: string;
//   description: string;
//   rating: string;
//   category: string;
//   product_type: string;
//   tag_list: string[];
//   api_featured_image: string;
//   product_colors: { hex_value: string; colour_name: string }[];
// };

// const getProductData = async () => {
//   const res = await fetch(
//     "https://makeup-api.herokuapp.com/api/v1/products.json"
//   );
//   return res.json();
// };

// export default function Products() {
//   const [productData, setProductData] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getProductData();
//       setProductData(data);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className="px-4 md:px-8 py-4">
//       <h1 className="text-2xl font-bold mb-4">Product Details</h1>
//       {productData.length > 0 ? (
//         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {productData.map((product, index) => (
//             <li key={index} className="bg-white rounded-lg p-4 shadow-md">
//               <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//               <p className="mb-2">Description: {product.description}</p>
//               <p className="mb-2">Price: {product.price}</p>

//               <img
//                 src={product.api_featured_image}
//                 alt={product.name}
//                 className="max-w-full h-auto mb-2"
//               />

//               <p className="mb-2">Tag List: {product.tag_list.join(", ")}</p>
//               <p className="mb-2">Rating: {product.rating}</p>
//               <p className="mb-2">Category: {product.category}</p>
//               <p className="mb-2">Product Type: {product.product_type}</p>
//               <p className="mb-2">Brand: {product.brand}</p>
//               <p className="mb-2">
//                 Product Link:{" "}
//                 <a
//                   href={product.product_link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 underline"
//                 >
//                   {product.product_link}
//                 </a>
//               </p>
//               <p className="mb-2">
//                 Website Link:{" "}
//                 <a
//                   href={product.website_link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 underline"
//                 >
//                   {product.website_link}
//                 </a>
//               </p>

//               {/* Dropdown menu for product colors */}
//               {product.product_colors && product.product_colors.length > 0 && (
//                 <div className="relative mt-4">
//                   <select className="bg-blue-500 text-white py-2 px-4 rounded-md w-full text-left">
//                     Product Colors
//                   </select>
//                   <ul className="absolute left-0 hidden mt-2 bg-white border border-gray-300 shadow-md">
//                     {product.product_colors.map((color, colorIndex) => (
//                       <li key={colorIndex} className="p-2">
//                         <div className="flex items-center">
//                           <span
//                             className="inline-block w-4 h-4 mr-2"
//                             style={{
//                               backgroundColor: `#${color.hex_value}`,
//                             }}
//                           ></span>
//                           <p>Hex Value: {color.hex_value}</p>
//                         </div>
//                         <p>Color Name: {color.colour_name}</p>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-center">Loading...</p>
//       )}
//     </div>
//   );
// }
// import { useEffect, useState } from "react";

// type Product = {
//   name: string;
//   brand: string;
//   price: string;
//   product_link: string;
//   website_link: string;
//   description: string;
//   rating: string;
//   category: string;
//   product_type: string;
//   tag_list: string[];
//   api_featured_image: string;
//   product_colors: { hex_value: string; colour_name: string }[];
// };

// const getProductData = async () => {
//   const res = await fetch(
//     "https://makeup-api.herokuapp.com/api/v1/products.json"
//   );
//   return res.json();
// };

// export default function Products() {
//   const [productData, setProductData] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getProductData();
//       setProductData(data);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className="px-4 md:px-8 py-4">
//       <h1 className="text-2xl font-bold mb-4">Product Details</h1>
//       {productData.length > 0 ? (
//         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {productData.map((product, index) => (
//             <li key={index} className="bg-white rounded-lg p-4 shadow-md">
//               <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//               <p className="mb-2">Description: {product.description}</p>
//               <p className="mb-2">Price: {product.price}</p>

//               <img
//                 src={product.api_featured_image}
//                 alt={product.name}
//                 className="max-w-full h-auto mb-2"
//               />

//               <p className="mb-2">Tag List: {product.tag_list.join(", ")}</p>
//               <p className="mb-2">Rating: {product.rating}</p>
//               <p className="mb-2">Category: {product.category}</p>
//               <p className="mb-2">Product Type: {product.product_type}</p>
//               <p className="mb-2">Brand: {product.brand}</p>
//               <p className="mb-2">
//                 Product Link:{" "}
//                 <a
//                   href={product.product_link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 underline"
//                 >
//                   {product.product_link}
//                 </a>
//               </p>
//               <p className="mb-2">
//                 Website Link:{" "}
//                 <a
//                   href={product.website_link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 underline"
//                 >
//                   {product.website_link}
//                 </a>
//               </p>

//               {product.product_colors && product.product_colors.length > 0 && (
//                 <div className="mt-4">
//                   <h3 className="text-lg font-semibold">Product Colors</h3>
//                   <ul className="mt-2">
//                     {product.product_colors.map((color, colorIndex) => (
//                       <li key={colorIndex} className="mb-1">
//                         <p>
//                           Hex Value:{" "}
//                           <span
//                             className="inline-block w-4 h-4 mr-2"
//                             style={{ backgroundColor: `#${color.hex_value}` }}
//                           ></span>
//                           {color.hex_value}
//                         </p>
//                         <p>Color Name: {color.colour_name}</p>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="text-center">Loading...</p>
//       )}
//     </div>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";

// type Product = {
//   name: string;
//   brand: string;
//   price: string;
// //   price_sign: string;
// //   currency: string;
// //   image_link: string;
//   product_link: string;
//   website_link: string;
//   description: string;
//   rating: string;
//   category: string;
//   product_type: string;
//   tag_list: string[];
// //   created_at: string;
// //   updated_at: string;
// //   product_api_url: string;
//   api_featured_image: string;
//   product_colors: { hex_value: string; colour_name: string }[];
// };

// const getProductData = async () => {
//   const res = await fetch(
//     "https://makeup-api.herokuapp.com/api/v1/products.json"
//   );
//   return res.json();
// };

// export default function Products() {
//   const [productData, setProductData] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getProductData();
//       setProductData(data);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Product Details</h1>
//       {productData.length > 0 ? ( // Check if productData is not empty
//         <ul>
//             {productData.map((product, index) => (
//                 <li key={index}>
//                     <h2>{product.name}</h2>
//                     <p>Description: {product.description}</p>
//                     <p>Price: {product.price}</p>

//                     <p>API Featured Image: {product.api_featured_image}</p>
//                     <p>Tag List: {product.tag_list}</p>
//                     <p>Rating: {product.rating}</p>
//                     <p>Category: {product.category}</p>
//                     <p>Product Type: {product.product_type}</p>
//                     <p>Brand: {product.brand}</p>
//                     <p>Product Link: {product.product_link}</p>
//                     <p>Website Link: {product.website_link}</p>

//                     {/* Render product colors */}

//                     {product.product_colors && product.product_colors.length > 0 && (
//                         <div>
//                             <h3>Product Colors</h3>
//                             <ul>
//                                 {product.product_colors.map((color, index) => (
//                                     <li key={index}>
//                                         <p>Hex Value: {color.hex_value}</p>
//                                         <p>Color Name: {color.colour_name}</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </li>
//             ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import axios from "axios";

// // Define a type for the product data
// type ProductData = {
//   productDetails: string;
//   description: string;
//   price: string;
//   longDescription: string;
//   productVideos: Array<any>; // You can provide a more specific type here if needed
// };

// export default function Products() {
//   const [product, setProduct] = useState<ProductData | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const options = {
//           method: "GET",
//           url: "https://sephora.p.rapidapi.com/us/products/v2/detail",
//           params: {
//             productId: "P442563",
//             preferedSku: "2210607",
//           },
//           headers: {
//             "X-RapidAPI-Key": "216d67c560mshd9bbb3838a7cc5bp1fe37bjsn4c7558bdfb69",
//             "X-RapidAPI-Host": "sephora.p.rapidapi.com",
//           },
//         };

//         const response = await axios.request(options);

//         // Log the entire response data to the console
//         console.log(response.data);

//         // Access the desired product data
//         const productData = response.data;

//         // Log individual properties to the console
//         console.log("DisplayName:", productData.currentSku.displayName);
//         console.log("Description:", productData.currentSku.ingredientDesc);
//         console.log("Price:", productData.currentSku.listPrice);
//         console.log("Long Description:", productData.productDetails.longDescription);

//         // Set the 'product' state with the data you want to display
//         setProduct({
//           productDetails: productData.currentSku.displayName,
//           description: productData.currentSku.ingredientDesc,
//           price: productData.currentSku.listPrice,
//           longDescription: productData.productDetails.longDescription,
//           productVideos: productData.productVideos,
//         });
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Product Details</h1>
//       {product ? (
//         <div>
//           <h2>{product.productDetails}</h2>
//           <p>Description: {product.description}</p>
//           <p>Price: {product.price}</p>
//           <p>Long Description: {product.longDescription}</p>
//           {/* Render product videos */}
//           {product.productVideos && product.productVideos.length > 0 && (
//             <div>
//               <h3>Product Videos</h3>
//               <ul>
//                 {product.productVideos.map((video, index) => (
//                   <li key={index}>
//                     <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
//                       {video.videoTitle}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }
