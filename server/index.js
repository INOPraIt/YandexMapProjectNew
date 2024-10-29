require('dotenv').config()
const express = require('express');
const cors =  require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMiddleware = require('./middelware/error-middleware');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => res.send('Home Page Route'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: true, credentials: true}));
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://Admin:Pas321@cluster0.lxdz2.mongodb.net/yandexmap?retryWrites=true&w=majority&appName=Cluster0', { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
