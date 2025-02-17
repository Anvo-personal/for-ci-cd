const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

// Cấu hình Express để phục vụ các file tĩnh từ thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'), (err) => {
        if (err) {
            res.status(500).send('Error loading index.html');
        }
    });
});

// Lắng nghe trên port
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});