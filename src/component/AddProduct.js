// src/components/AddProduct.js
import React, { useState } from "react";
import "../css/AddProduct.css"; // Import your CSS file

const AddProduct = () => {
  const [productData, setProductData] = useState({
    productName: "",
    sku: "",
    buyingprice: "",
    unit: "",
    brand: "",
    type: "",
    category: "",
    subCategory: "",
    stockAlertLevel: "",
    description: "",
    image: "",
    isTaxApplicable: false,
    taxType: "",
    taxPercentage: "",
    // productType: "",
    // margin: "",
    sellingPriceExcludeTax: "",
    sellingPriceIncludeTax: "",
  });

  //camera logicc
  function openCamera() {
    // Your camera opening logic here
  }

  //open camera logic(InCOMPLETE)
  // function openCamera() {
  //   // Check if the getUserMedia function is available
  //   if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  //     // Access the user's camera
  //     navigator.mediaDevices
  //       .getUserMedia({ video: true })
  //       .then(function (stream) {
  //         // The camera stream is available in the 'stream' variable
  //         // You can use this stream to display the camera feed in your application

  //         // For example, you can create a video element and set the stream as the source
  //         const videoElement = document.createElement("video");
  //         videoElement.srcObject = stream;

  //         // Play the video to display the camera feed
  //         videoElement.play();

  //         // Optionally, you can capture frames from the camera stream or perform other actions here
  //       })
  //       .catch(function (error) {
  //         console.error("Error accessing camera: ", error);
  //       });
  //   } else {
  //     console.error("getUserMedia is not available in this browser.");
  //   }
  // }

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
          <label>Buying Price:</label>
          <input
            type="text"
            name="Buyingprice"
            value={productData.buyingprice}
            onChange={handleChange}
          />
        </div>
        <div className="unit-container">
          <label htmlFor="unit">Weight & Unit:</label>
          <div className="unit-input">
            <input
              type="number"
              name="unit"
              value={productData.unit}
              onChange={handleChange}
            />
          </div>
          <select
            className="unit-dropdown"
            name="unitType"
            value={productData.unitType}
            onChange={handleChange}
          >
            <option value="kG">kG</option>
            <option value="litre">liter</option>
            <option value="grams">grams</option>
            <option value="packets">packets</option>
            <option value="combo">combo</option>
          </select>
        </div>
        <div>
          <label>Brand:</label>
          <input
            type="text"
            name="Brand"
            checked={productData.brand}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Type:</label>
          <select name="type" value={productData.type} onChange={handleChange}>
            <option value="direct-sell">Direct Sell</option>
            <option value="raw-item">Raw Item</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="Category"
            checked={productData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Sub-Category:</label>
          <input
            type="text"
            name="subcategory"
            checked={productData.subCategory}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Stock Alert-Level:</label>
          <input
            type="text"
            name="Alert-level"
            checked={productData.stockAlertLevel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="Description"
            checked={productData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleChange}
          />
          <button onClick={openCamera}>Open Camera</button>
        </div>

        {/* Add other input fields for product details here */}
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
          <label>Tax Type:</label>
          <input
            type="text"
            name="taxtype"
            checked={productData.taxType}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tax Perceentage(%):</label>
          <input
            type="number"
            name="tax"
            checked={productData.taxPercentage}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Selling Price(Excl Tax):</label>
          <input
            type="text"
            name="SellingpriceEXCtax"
            checked={productData.sellingPriceExcludeTax}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Selling Price(Incl Tax):</label>
          <input
            type="text"
            name="SellingpriceInclTax"
            checked={productData.sellingPriceIncludeTax}
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
