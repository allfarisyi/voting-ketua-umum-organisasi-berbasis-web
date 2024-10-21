import express from "express"; // Perbaikan pada import

const app = express(); // Perbaikan penulisan const

const port = 5000;

// Menangani permintaan GET pada rute "/"
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello World" // Mengirimkan respon JSON dengan pesan "Hello World"
    });
});

// Middleware untuk menangani rute yang tidak ditemukan (404)
app.use((req, res) => {
    res.status(404).json({
        message: "Not Found" // Mengirimkan respon JSON dengan pesan "Not Found"
    });
});

// Menjalankan server di port 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
