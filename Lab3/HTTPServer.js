const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === 'GET') {
    if (url === '/') {
      // Serve home page
      const html = `
        <html>
          <head>
            <title>Welcome</title>
            <link rel="stylesheet" href="/style.css">
          </head>
          <body>
            <h1>Welcome</h1>
          </body>
        </html>
      `;
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    } else if (url === '/style.css') {
      fs.readFile('style.css', (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end('Error loading CSS file');
        } else {
          res.setHeader('Content-Type', 'text/css');
          res.end(data);
        }
      });
    } else {
      res.statusCode = 404;
      res.end('Page not found');
    }
  }
  else if (method === 'POST') {
    if (url === '/sign-up') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const { email, password, username } = JSON.parse(body);
      });
    } else if (url === '/login') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const { email, password } = JSON.parse(body);
      });
    } else {
      res.statusCode = 404;
      res.end('Page not found');
    }
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});