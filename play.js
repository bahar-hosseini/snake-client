//External Modules
const net = require('net');

//Internal Modules
const  {conn} = require('./client');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();


  const handleUserInput = function() {
  // your code here
    conn.on("data", (data) => {
      console.log("Server says: ", data);
    });
  };
  
  stdin.on("data", handleUserInput);
  return stdin;
};

