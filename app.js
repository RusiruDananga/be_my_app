const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const booksRoute = require('./routes/books');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());
app.use('/books', booksRoute);

(async () => {
    try {
        await mongoose.connect('mongodb+srv://book:book@cluster0.jnxpqzf.mongodb.net/?retryWrites=true&w=majority');
        console.log("DB connected");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
})();

app.listen(4000);