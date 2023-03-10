require('dotenv').config();
const express = require('express');
const router = require('./routers/root.router');
const connectDB = require('./config/connectDB');
const cors = require('cors');

// Connect to database
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api' ,router);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});

