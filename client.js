const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // -------------Event Handlers------------

  conn.on("connect", () => {
    // code that does something when the connection is first established
    conn.write("Name: Yo🤘");
    // conn.write("Move: up");
    // setTimeout(()=>{
    //   conn.write("Move: up");
    // },2000);
    // setTimeout(()=>{
    //   conn.write("Move: up");
    // },4000);
    console.log("Successfully connected to game server");
  });
  
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });
  
  conn.on("end", () => {
    console.log("Connection closed by the server");
  });

  conn.on("close", () => {
    console.log("Connection closed");
  });

  return conn;
};

module.exports = { connect };