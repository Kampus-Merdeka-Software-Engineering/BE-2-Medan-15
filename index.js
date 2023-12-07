const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
// products router
const dbConnection = require('./model/dbConnection');
const userRouter = require('./routes/signup');
const checkOUT = require('./routes/CheckOut')
// const loginRouter = require('./routes/login');
app.use(cors())
app.use(express.static('static'));
app.use(express.urlencoded({
   extended: false
}));

// const formidableMiddleware = require('express-formidable');
// const registration = require('./model/user');

// gunakan middleware formidable pada aplikasi express Anda
// app.use(formidableMiddleware());

// // Konfigurasi koneksi ke database MySQL
// const dbConnection = new sequelize('signup_db', 'root', 'Aleram123', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// // Menguji koneksi ke database MySQL
// dbConnection.authenticate()
//     .then(() => {
//         console.log('Terhubung ke database MySQL');
//     })
//     .catch(err => {
//         console.error('Gagal terhubung ke database MySQL:', err);
//     });

app.use(express.json());
app.use(cors());
app.use('/checkOut', checkOUT);
app.use('/registration', userRouter.signup);
app.use('/login', userRouter.login);

const port = 3000;
app.listen(port, () => {
   console.log('App listening on port 3310');
   dbConnection.authenticate().then(() => {
     console.log('database terhubung')
   }).catch((err) => {
     console.log('terjadi error saat koneksi ke database', err)
     process.exit()
   })
 });

