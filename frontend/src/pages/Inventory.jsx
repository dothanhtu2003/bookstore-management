import React from "react";

const Inventory = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Inventory & Stock</h2>
      <div style={{ marginBottom: "15px" }}>
        <button style={{ marginRight: "10px", padding: "8px 15px" }}>Create Book Import Reciept</button>
        <button style={{ padding: "8px 15px" }}>Inventory Check</button>
      </div>
      <table border="1" cellPadding="8" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Title</th>
            <th>Category</th>
            <th>Stock Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              Stock list be displayed here
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;