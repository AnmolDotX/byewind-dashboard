import React from "react";

const TopSellingProducts = () => {
  const products = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ];

  return (
    <div className="bg-[#F7F9FB] rounded-2xl p-6 w-full max-w-4xl">
      <h2 className="text-sm font-semibold text-gray-800 mb-4">
        Top Selling Products
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 text-xs font-normal text-gray-400">
                Name
              </th>
              <th className="text-left py-3 text-xs font-normal text-gray-400">
                Price
              </th>
              <th className="text-left py-3 text-xs font-normal text-gray-400">
                Quantity
              </th>
              <th className="text-left py-3 text-xs font-normal text-gray-400">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="">
                <td className="py-2 text-sm font-normal text-black">
                  {product.name}
                </td>
                <td className="py-2 text-sm font-normal text-black">
                  {product.price}
                </td>
                <td className="py-2 text-sm font-normal text-black">
                  {product.quantity}
                </td>
                <td className="py-2 text-sm font-normal text-black">
                  {product.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProducts;
