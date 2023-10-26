const Book = require('../models/bookModel');

var sampleBooks = [
    {
      "title": "The Great Adventure",
      "author": "John Smith",
      "description": "Join the thrilling journey of a young adventurer as he embarks on a quest to save his homeland from an ancient evil.",
      "genre": "Fantasy",
      "price": 19.99
    },
    {
      "title": "Mystery at Willow Lake",
      "author": "Emily Johnson",
      "description": "A gripping tale of suspense and intrigue unfolds in a quiet lakeside town as a detective races to solve a puzzling murder case.",
      "genre": "Mystery",
      "price": 14.99
    },
    {
      "title": "Science Explorations",
      "author": "David Williams",
      "description": "Dive into the fascinating world of science with this educational and engaging book that explores various scientific concepts and experiments.",
      "genre": "Non-Fiction",
      "price": 29.99
    }
  ]
  

// GET all books
exports.getBooks = async (req, res) => {
    try {
        // const books = await Book.find();

        // if(books && books.length > 0  ){
        //     res.status(200).json(books);}
        // else{
        //     // in API you will send 
        //     // res.status(404).json({ message: 'No books found' });
        //     // but in UI you will render a view
        //     res.render('bookExchageForm', { title: 'Add Book Exchange', user: req.user, books: books, api_version: process.env.API_VERSION });
        // }

        const books = sampleBooks; // Use sampleBooks as the data source

        if (books && books.length > 0) {
            res.render('bookExchange table', { title: 'Available Books for Exchange', user: req.user, books: books });
        } else {
            // You can customize this message if needed
            res.render('bookExchange table', { title: 'Available Books for Exchange', user: req.user, books: [], message: 'No books available for exchange currently.' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET a single book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// CREATE a new book
exports.createBook = async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        genre: req.body.genre,
        price: req.body.price,
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// UPDATE a book by ID
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        book.title = req.body.title || book.title;
        book.author = req.body.author || book.author;
        book.description = req.body.description || book.description;
        book.genre = req.body.genre || book.genre;
        book.price = req.body.price || book.price;

        const updatedBook = await book.save();
        res.status(200).json(updatedBook);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE a book by ID
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        await book.remove();
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
