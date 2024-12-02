import React, { useState } from "react";

const ProductCustomization = () => {
  const [length, setLength] = useState(0); // Length in feet
  const [width, setWidth] = useState(0); // Width in feet
  const [quantity, setQuantity] = useState(1);

  // Calculate area and price
  const calculatePrice = () => {
    const area = length * width; // Area in square feet
    const pricePerSqFt = 10; // ₹10 per square foot
    const totalPrice = area * pricePerSqFt * quantity;
    return totalPrice;
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white border rounded-md shadow-md">
      <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
        <li>Order from 1 unit.</li>
      </ul>

      <div className="space-y-4">
        {/* Length Input */}
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700">
            Length (ft)
          </label>
          <input
            id="length"
            type="number"
            value={length}
            min={1}
            onChange={(e) => setLength(e.target.value)}
            className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          />
        </div>

        {/* Width Input */}
        <div>
          <label htmlFor="width" className="block text-sm font-medium text-gray-700">
            Width (ft)
          </label>
          <input
            id="width"
            type="number"
            value={width}
            min={1}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          />
        </div>

        {/* Quantity Input */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            min={1}
            max={10000}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          />
          <p className="mt-1 text-xs text-gray-500">
            Choose a quantity between 1 - 10,000 for instant ordering. For higher
            quantities, you will be allowed to request quotations from Sales Team.
          </p>
        </div>

        {/* Price and Actions */}
        <div className="space-y-2">
          <p className="text-orange-600 font-medium text-lg">
            ₹{calculatePrice().toFixed(2)} inclusive of all taxes
          </p>
          <p className="text-sm text-gray-500">
            for {quantity} Qty ({(calculatePrice() / quantity).toFixed(2)} / piece)
          </p>
          <a href="#" className="text-indigo-600 text-sm font-medium hover:underline">
            Buy in bulk and save
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCustomization;
