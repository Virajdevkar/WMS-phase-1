// src/components/AddDistributor.js
import React, { useState } from "react";
import "../css/AddDistributor.css"; // Import your CSS file

const AddDistributor = () => {
  const [distributorData, setDistributorData] = useState({
    warehousenumber: "",
    name: "",
    companyname: "",
    address: "",
    contact: "",
    email: "",
    // Add other fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDistributorData({
      ...distributorData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your API endpoint for adding distributors
    const apiUrl = "https://your-api-endpoint.com/distributors";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(distributorData),
      });

      if (response.ok) {
        // Data successfully sent to the backend
        console.log("Distributor added successfully");
        // Optionally, you can reset the form here
        setDistributorData({
          name: "",
          address: "",
          contact: "",
          email: "",
          // Reset other fields as needed
        });
      } else {
        // Handle errors if the request fails
        console.error("Failed to add distributor");
      }
    } catch (error) {
      console.error("Error while adding distributor:", error);
    }
  };

  return (
    <div className="AddDistributor">
      <h2>Add Distributor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Warehouse Number (Unique ID):</label>
          <input
            type="number"
            name="warehousenumber"
            value={distributorData.warehousenumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={distributorData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            maxLength={10}
            value={distributorData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email: (Optional)*</label>
          <input
            type="email"
            name="email"
            value={distributorData.email}
            onChange={handleChange}
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
            title="Please enter a valid email address"
          />
        </div>

        <div>
          <label>Company Name: (Optional)*</label>
          <input
            type="text"
            name="name"
            value={distributorData.companyname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address: (Optional)*</label>
          <input
            type="text"
            name="address"
            value={distributorData.address}
            onChange={handleChange}
            required
          />
        </div>
        
        
        {/* Add other input fields for distributor details here */}
        <button type="submit">Add Distributor</button>
      </form>
    </div>
  );
};

export default AddDistributor;
