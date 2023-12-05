const Book = require('../models/bookModel');

// Render a new book from send the HTML form to the client (browser) so that the user can send the data
exports.addBook = async (req, res) => {
    try {
        res.render('./books/bookExchangeAddForm'); 
    } catch (err) {
        res.status(400).render('appError', { title: 'Add new Book', user: req.user, errors: err.errors });
    }
};

// CREATE a new book
exports.createBook = async (req, res) => {
    try {
        const book = new Book({
        title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            exchangeType: req.body.exchangeType,
            owner: req.user._id,  
            status: req.body.status,
            createdBy: req.user._id
        });
        const newBook = await book.save();
        res.redirect('/books'); // assuming '/books' is where you list all books
    } catch (err) {
        console.log(`err - ${JSON.stringify(err)}`)
        // res.status(400).render('appError', { title: 'Create Book', user: req.user, errors: err.errors });
    }
};

// READ GET all books
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find({  owner: req.user._id });
        res.render('./books/bookListForm', { title: 'All Books', user: req.user, books });
    } catch (err) {
        res.status(500).render('appError', { message: err.message });
    }
};

exports.booksHome = async (req, res) => {
    try {
        const books = await Book.find({ owner: { $ne: req.user._id } });
        res.render('./books/bookExchange', { title: 'All Books', user: req.user, books });
    } catch (err) {
        res.status(500).render('appError', { message: err.message });
    }
};

// GET a single book by ID
exports.getBookById = async (req, res) => {
    try {
            const book = await Book.findById(req.params.id);
            if (!book) {
                return res.status(404).render('error', { message: 'Book not found' });
            }
            res.render('./books/bookExchangeDetails', { book });
    } catch (err) {
        res.status(500).render('error', { message: err.message });
    }
};


// UPDATE a book by ID
// Render a update book from send the HTML form to the client (browser) so that the user can send the data
exports.updateBookForm = async (req, res) => {
    try {
            const book = await Book.findById(req.params.id);
            console.log('Book ID from params:', req.params.id);  // Step 3

            if (!book) {
                console.log('Book not found');  // Step 5
                return res.status(404).json({ message: 'Book not found' });
            }
            
            console.log('Book found:', book);  // Step 4

            res.render('./books/bookExchangeDetails', {book:book}); 
    } catch (err) {
        res.status(400).render('appError', { title: 'Update Book', user: req.user, errors: err.errors });
    }
};

exports.updateBookById = async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!book) {
        return res.status(404).render("error", { message: "Book not found" });
      }
      const updatedBooks = await Book.find();
      res.render(`./books/bookListForm`, {books: updatedBooks}); // Redirect to book detail page
      //res.redirect(`/books/${req.params.id}`); // Redirect to book detail page
    } catch (err) {
        res.status(500).render('error', { message: err.message });
    }
};

// DELETE a book by ID
exports.deleteBook = async (req, res) => {
    try {
            const book = await Book.findByIdAndRemove(req.params.id);
            if (!book) {
                return res.status(404).render('error', { message: 'Book not found' });
            }
            res.redirect('/books'); // Redirect to all books list
    } catch (err) {
        res.status(500).render('error', { message: err.message });
    }
};

// Controller for handling book request
exports.requestBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const userId = req.user._id;

        const book = await Book.findById(bookId);

        // Check if the user has already requested the book
        const existingRequest = book.requests.find(request => request.user.equals(userId));

        if (existingRequest) {
            return res.status(400).json({ message: 'You have already requested this book.' });
        }

        // Add user ID to the requests array
        book.requests.push({
            user: userId,
            status: 'pending',
        });

        book.status='unavailable';
        // Save the updated book
        await book.save();

        res.render('./books/transactionSuccessPage');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

exports.acceptBookRequest = async (req, res) => {
    try {
        const bookId = req.params.id;
        const requestId = req.params.requestId;

        const book = await Book.findById(bookId);

        // Find the request in the book's requests array
        const request = book.requests.find(request => request._id.equals(requestId));

        if (!request) {
            return res.status(404).json({ message: 'Request not found.' });
        }

        // Update the status of the request to 'accepted'
        request.status = 'accepted';
        book.requests = []
        // Set the book's owner to the user who requested
        book.owner = request.user;

        book.status='available';

        // Save the updated book
        await book.save();

        res.render('./books/transactionSuccessPage');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};
