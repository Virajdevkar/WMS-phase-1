// src/components/AddProduct.js
import React, { useState } from "react";
import "../css/AddProduct.css"; // Import your CSS file

const AddProduct = () => {
  const [productData, setProductData] = useState({
    productName: "",
    sku: "",
    unit: "",
    brand: "",
    category: "",
    subCategory: "",
    stockAlertLevel: "",
    description: "",
    image: "",
    weight: "",
    isSelling: false,
    isTaxApplicable: false,
    taxType: "",
    taxPercentage: "",
    productType: "",
    margin: "",
    sellingPriceExcludeTax: "",
    sellingPriceIncludeTax: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "checkbox" ? e.target.checked : value;
    setProductData({
      ...productData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the data to your backend or perform other actions
    console.log(productData);
  };

  return (
    <div className="AddProduct">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={productData.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>SKU:</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Unit:</label>
          <input
            type="text"
            name="unit"
            value={productData.unit}
            onChange={handleChange}
          />
        </div>
        {/* Add other input fields for product details here */}
        <div>
          <label>Is Selling:</label>
          <input
            type="checkbox"
            name="isSelling"
            checked={productData.isSelling}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tax Applicable:</label>
          <input
            type="checkbox"
            name="isTaxApplicable"
            checked={productData.isTaxApplicable}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Add</button>
          <button type="button">Close</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
