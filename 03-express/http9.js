//Create  http webpage on which homepage display welcome to login page in blue color and fontsize must be 32px. login page shows one html file  from static url having form with detail for username,password,submit and reset button, Gallery page reflect one image my-photo.jpg and any other page shows page not found

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/' || url === '/index.html') {
        // Homepage: Internal HTML with specific styling
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1 style="color: blue; font-size: 32px;">Welcome to Login Page</h1>`);

    } else if (url === '/login') {
        // Login Page: Serve static login.html
        fs.readFile('./login.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading login page');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });

    } else if (url === '/gallery') {
        // Gallery Page: Serve static gallery.html
        fs.readFile('./gallery.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading gallery');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });

    } else if (url === '/my-photo.jpg') {
        // Serve the image file
        fs.readFile('./my-photo.jpg', (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end('Image not found');
            }
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.end(data);
        });

    } else {
        // Any other page: 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

server.listen(6051, () => {
    console.log('Server running at http://localhost:6051/');
});
