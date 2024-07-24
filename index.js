const express = require('express');
const cookieParser = require('cookie-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');


const app = express();

// Replace the URL and cookies with your actual values
const targetURL = 'https://shuttle.lol/';

const cookies = [
  // ... (your cookie objects here)
];
// yes
// Middleware to parse cookies
app.use(cookieParser());

// Redirect after 2 seconds
app.get('/redirect2', (req, res) => {
  res.redirect(302, '/class?domain=roblox');
});

// Redirect after 10 seconds
app.get('/redirect10', (req, res) => {
  res.redirect(302, '/uv/education/hvtrs8%2F-nmw%2Cge%2Frlcy-ulcwbg%2F5054-nmw');
});

// Serve the index.html when explicitly requested
// Serve the index.html when explicitly requested
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
// Serve the index.html when explicitly requested
// Serve the index.html when explicitly requested
app.get('/loading.mp4', (req, res) => {
  res.sendFile(path.join(__dirname, '/loading.mp4'));
});

app.get('/checksum.txt', (req, res) => {
  res.sendFile(path.join(__dirname, '/checksum.txt'));
});

app.get('/apps/kitika-games/7999/stumble-guys.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/apps/kitika-games/7999/stumble-guys.html'));
});

app.get('/apps/activision-publishing-inc/7935/call-of-duty.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/apps/activision-publishing-inc/7935/call-of-duty.html'));
});

app.get('/apps/playducky/7199/melon-sandbox.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/apps/playducky/7199/melon-sandbox.html'));
});

app.get('/apps/psyonix-studios/4656/rocket-league.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/apps/psyonix-studios/4656/rocket-league.html'));
});

app.get('/apps/electronic-arts/1353/ea-sports-fc-mobile-24-soccer.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/apps/electronic-arts/1353/ea-sports-fc-mobile-24-soccer.html'));
});

app.get('/apps/pixel-gun-3d/2652/pixel-gun.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/apps/pixel-gun-3d/2652/pixel-gun.html'));
});

app.get('/apps/robtop-games/1400/geometry-dash.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/apps/robtop-games/1400/geometry-dash.html'));
});

app.get('/apps/devsisters-corporation/3475/cookie-run.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/apps/devsisters-corporation/3475/cookie-run.html'));
});

app.get('/apps/uncube/7074/now.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/apps/uncube/7074/now.html'));
});

app.get('/apps/epic-games/7308/fortnite.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/apps/epic-games/7308/fortnite.html'));
});

app.get('/apps/frogiee1/69420/custom-thingy-loader.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/apps/frogiee1/69420/custom-thingy-loader.html'));
});

// Proxy middleware to add cookies to the request
const proxyMiddleware = createProxyMiddleware({
  target: targetURL,
  changeOrigin: true,
  onProxyReq: (proxyReq) => {
    // Adding cookies to the request
    cookies.forEach(cookie => {
      proxyReq.setHeader('cookie', `${cookie.name}=${cookie.value}`);
    });
  },
});

// Use the proxy middleware for everything else
app.use((req, res, next) => {
  if (req.url !== '/index.html' && req.url !== '/redirect2' && req.url !== '/redirect10') {
    proxyMiddleware(req, res, next);
  } else {
    next();
  }
});

const PORT = 5000; // Change this to the desired port number
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});