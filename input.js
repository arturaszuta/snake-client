let connection = require("./play");

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
  switch (key) {
  case "w":
    return connection.write("Move: up");
  case "s":
    return connection.write("Move: down");
  case "d":
    return connection.write("Move: right");
  case "a":
    return connection.write("Move: left");
  case "l":
    return connection.write("Say: GOTCHA!!");
  }
};

module.exports = { setupInput };
