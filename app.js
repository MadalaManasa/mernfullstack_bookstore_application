const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();

const path = require("path");

//Middleware
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books 

if (process.env.NODE_ENV === "production")   {  
    app.use(express.static("book-store/build"));  
    app.get("*", (req, res) => {    
        res.sendFile(path.resolve(__dirname, "book-store", "build", "index.html"));  
    });
}




mongoose
    .connect("mongodb+srv://admin:admin@cluster0.lxuei.mongodb.net/bookStore?retryWrites=true&w=majority"
)
.then(() => console.log("Connected to Database"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));


//mongodb username admin pswd admin