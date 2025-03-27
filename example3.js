const fs = require('fs');
const http = require('http');
const os = require('os');

const osType = os.type();
console.log(`OS Type: ${osType}`);

const htmlContent = `
    <!DOCTYPE html>
    <html>
        <h3>
            Hello World! Your OS type is ${osType}
        </h3>
    </html>
`;

const server = http.createServer((req, res) => {
    console.log('Αρχικά δημιουργούμε αρχείο index.html με περιεχόμενο htmlContent');
    fs.writeFile('./index.html', htmlContent, err => {
        if (err) {
            console.log('Error writing to file');
        } else {
            console.log('Διαβάζουμε το αρχείο και το στέλνουμε πίσω');
            fs.readFile('./index.html', 'utf8', (err, data) => {
                if (err) {
                    console.log('Error reading file', err);
                }
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
                })
            }   
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
})