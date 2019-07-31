const net = require('net')

const connect = function() {
  const conn = net.createConnection({
    host: '172.46.0.110',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
   
  conn.on('data', (data) => {
    console.log(`Server says: ${data}`);
  });

  conn.on('connect', () => {
    console.log("You've succesfully connected!");
    conn.write('Name: AZ', () => {
      // conn.write('Move: up');
      // let i = 0;
      // while(i < 10) {
      //   setTimeout(() => {
      //     conn.write('Move: left');
      //   },50 + i);
      // i++;  
      // }
    });
    
    // conn.write('Move: down');
    // conn.write('Move: right');
  });
  



  
  return conn;
};

module.exports = { connect };