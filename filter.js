const users = [
    { name: "Amit", age: 25 },
    { name: "Priya", age: 18 },
    { name: "Rahul", age: 30 },
    { name: "Ananya", age: 16 },
  ];
  
  const adults = 
  users.filter(user=>user.age >= 18);
  console.log("Adult Users:", adults);