const http = require("http");

const server = http.createServer((req, res) => {  
  if (req.url == "/html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const style = `
      place-content: center;
      display: grid;
      place-items: center;
      font-family: monospace;
    `
    res.end(`
      <html>
        <body style="${ style }">
          <h1>Welcome to Zuri Training
          <h2>Assignment Attempt by Ridwan</h2>
        </body>
      </html>
    `)
  } else if (req.url == "/json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(`
      {
        name: "Ridwan Olanrewaju",
        country: "Nigeria",
        hobby: "Software Development"
      }
    `)
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Zuri Training");
  }
})

server.listen(4000);