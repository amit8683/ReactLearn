import React from "react";

const Assignment2 = () => {
  const arr = [
    {
      name: "Amit",
      email: "amit@123",
      address: [
        {
          city: "Sirsa",
          state: "Haryana",
          country: "India",
        },
        {
          city: "Hissar",
          state: "Haryana",
          country: "India",
        },
      ],
    },
    {
      name: "Rahul",
      email: "rahul@123",
      address: [
        {
          city: "Delhi",
          state: "Delhi",
          country: "India",
        },
        {
          city: "Gurgaon",
          state: "Haryana",
          country: "India",
        },
      ],
    },
    {
      name: "Priya",
      email: "priya@123",
      address: [
        {
          city: "Mumbai",
          state: "Maharashtra",
          country: "India",
        },
        {
          city: "Pune",
          state: "Maharashtra",
          country: "India",
        },
      ],
    },
  ];

  return (
    <div>
      <h1>User Data</h1>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
                  <thead>
                    <tr>
                      <th>City</th>
                      <th>State</th>
                      <th>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.address.map((addr, addrIndex) => (
                      <tr key={addrIndex}>
                        <td>{addr.city}</td>
                        <td>{addr.state}</td>
                        <td>{addr.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assignment2;
