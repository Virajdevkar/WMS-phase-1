// src/components/AddWarehouse.js
import "../css/AddWarehouse.css";
import React, { useState } from "react";

const AddWarehouse = () => {
  const [warehouseData, setWarehouseData] = useState({
    warehouseNumber: "",
    address: "",
    Pincode: "",
    managedBy: "",
    contactNumber: "",
    IsRefrigerated: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWarehouseData({
      ...warehouseData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace this with your actual API endpoint
    const apiUrl = "https://your-api-endpoint.com/your-resource";

    try {
      const response = await fetch(apiUrl, {
        method: "POST", // Replace with the appropriate HTTP method (POST, PUT, etc.)
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(warehouseData),
      });

      if (response.ok) {
        // Data successfully sent to the backend
        console.log("Warehouse data added successfully");
        // Optionally, you can reset the form here
        setWarehouseData({
          warehouseNumber: "",
          address: "",
          Pincode: "",
          managedBy: "",
          contactNumber: "",
          IsRefrigerated: "",
        });
      } else {
        // Handle errors if the request fails
        console.error("Failed to add warehouse data");
      }
    } catch (error) {
      console.error("Error while adding warehouse data:", error);
    }
  };

  return (
    <>
      <div className="Container">
        <div>
          <h2>Add Warehouse</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Warehouse Number:</label>
              <input
                type="text"
                name="warehouseNumber"
                value={warehouseData.warehouseNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={warehouseData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label for="Pincode">Pincode:</label>
              <input
                type="text"
                maxLength="6"
                name="Pincode"
                value={warehouseData.Pincode}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Managed By:</label>
              <input
                type="text"
                name="managedBy"
                value={warehouseData.managedBy}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Warehouse Contact Number:</label>
              <input
                type="tel"
                name="contactNumber"
                maxLength={10}
                value={warehouseData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="IsRefrigerated">
              <label for="IsRefrigerated">Is Refrigerated:</label>
              <select
                name="IsRefrigerated"
                value={warehouseData.IsRefrigerated}
                onChange={handleChange}
                required
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <button type="submit">Add Warehouse</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddWarehouse;
