const { set } = require("lodash");

let connection;
let output = '';
const handleUserInput = function(key) {
  // your code here
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === '\u0003') {
    process.exit();
  }
  
  connection.write(`Say: ${output += key}`);
 
};
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();


  
  
  stdin.on("data", handleUserInput);
  stdin.on("data", ()=>{
    
  });
 
  
  return stdin;
};

module.exports = {setupInput};
