// Data.js

export const customers = [
  {
    id: 1,
    name: "Ankita Soni",
    email: "ankita@example.com",
    orderNumber: "ORD001",
    totalPrice: 1250,
  },
  {
    id: 2,
    name: "Ravi Kumar",
    email: "ravi@example.com",
    orderNumber: "ORD002",
    totalPrice: 880,
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya@example.com",
    orderNumber: "ORD003",
    totalPrice: 1525,
  },
  {
    id: 4,
    name: "Aditya Mehra",
    email: "aditya@example.com",
    orderNumber: "ORD004",
    totalPrice: 640,
  },
];

export const orders = [
  {
    id: "ORD12345",
    itemName: "Wireless Headphones",
    customerName: "Ankita Soni",
    location: "Mumbai, India",
    status: "Delivered",
    total: 3999,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224feca?auto=format&fit=crop&w=60&q=60",
    date: "2025-05-10",  // YYYY-MM-DD format
  },
  {
    id: "ORD12346",
    itemName: "Smartwatch Series 7",
    customerName: "Ravi Kumar",
    location: "Delhi, India",
    status: "Pending",
    total: 15999,
    image:
      "https://images.unsplash.com/photo-1606813903164-42b367ae8250?auto=format&fit=crop&w=60&q=60",
    date: "2025-06-02",
  },
  {
    id: "ORD12347",
    itemName: "Gaming Keyboard",
    customerName: "Priya Sharma",
    location: "Bangalore, India",
    status: "Processing",
    total: 2499,
    image:
      "https://images.unsplash.com/photo-1617957743957-dfdb5c57c1f5?auto=format&fit=crop&w=60&q=60",
    date: "2025-06-05",
  },
];

export const employees = [
  {
    id: "EMP001",
    name: "Ankita Soni",
    designation: "Software Developer",
    country: "India",
    hireDate: "2021-04-15",
    reportsTo: "Rahul Mehta",
  },
  {
    id: "EMP002",
    name: "Ravi Kumar",
    designation: "UI/UX Designer",
    country: "India",
    hireDate: "2022-01-10",
    reportsTo: "Ankita Soni",
  },
  {
    id: "EMP003",
    name: "Priya Sharma",
    designation: "Project Manager",
    country: "India",
    hireDate: "2020-09-25",
    reportsTo: "Rajeev Malhotra",
  },
];
