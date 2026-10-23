import React, { useState } from "react";

const Sales = () => {
  const [customer, setCustomer] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sales & Invoice Management</h2>
      <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ddd" }}>
        <h3>Customer Information</h3>
        <input
          type="text"
          placeholder="Customer ID/Name"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          style={{ padding: "8px", width: "300px" }}
        />
      </div>
      <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ddd" }}>
        <h3>Selected Books</h3>
        <table border="1" cellPadding="8" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Bool Title</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No items in the shopping cart
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button style={{ padding: "10px 20px", background: "#28a745", color: "#fff", border: "none" }}>
        Complete Invoice
      </button>
    </div>
  );
};

export default Sales;