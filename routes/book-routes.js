const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);//if we had book id we can get book details
router.put("/:id", booksController.updateBook);//for updating book details using id
router.delete("/:id",booksController.deleteBook); //for deleting book

module.exports = router;