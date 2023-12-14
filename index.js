const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
// MENGAMBIL DARI DATABASE INFO DI DBCONNECTION
const dbConnection = require('./model/dbConnection');
const userRouter = require('./routes/signup');

app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/registration', userRouter); // Gunakan router secara langsung
app.use('/login', userRouter); // Gunakan router secara langsung

// const formidableMiddleware = require('express-formidable');
// gunakan middleware formidable pada aplikasi express Anda
// app.use(formidableMiddleware());

// UNTUK MENGUJI DENGAN TRY CATCH APAKAH SUDAH TERHUBUNG ATAU TIDAK KE DB
const port = process.env.DB_PORT || 3000;
app.listen(port, () => {
    console.log('App listening on port 3000');
    dbConnection.authenticate().then(() => {
        console.log('database terhubung')
    }).catch((err) => {
        console.log('terjadi error saat koneksi ke database', err)
        process.exit()
    });
});
