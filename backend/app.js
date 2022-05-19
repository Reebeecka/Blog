var express = require('express');
var path = require('path');
const mongoose = require("mongoose");
var blogRouter = require('./routes/blog');
var app = express();
var cors = require('cors');

async function init() {
    try {
        const options = {useNewUrlParser: true, useUnifiedTopology: true}
        await mongoose.connect("mongodb+srv://rebeckalarsson:Helios97@rebecka.i3dmu.mongodb.net/Myblog?retryWrites=true&w=majority", options);
        console.log("Connected to database")
    }
    catch (error) {
        console.error(error);
    }

    app.use(express.json());
    app.use('/blog', blogRouter);
};

init();

module.exports = app;
