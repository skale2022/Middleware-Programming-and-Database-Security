const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
    // for parsing application/json
    // Sample book data
let books =
[
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' }
];

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} Request: ${req.path}`);
    next();
});

// This middleware simulates an authentication middleware
app.use((req, res, next) => {
    if (req.path === '/login' || req.path === '/signup') {
        next();
    } else if (req.headers.authorization !== 'Bearer token') {
        // If no valid token is provided, return a 401 status
        return res.status(401).json({ error: 'Invalid or missing token' });
    }
    next();
});

app.post('/login', (req, res) => {
    // For simplicity, assume there's a user with username 'user' and password 'pass'
    if (req.body.username === 'user' && req.body.password === 'pass') {
        // In real application, you would return a JWT token or similar
        res.json({ token: 'token' });
    } else {
        // If credentials are wrong, return a 401 status
        res.status(401).json({ error: 'Invalid username or password' });
    }
});

app.post('/signup', (req, res) => {
    try {
        // Simulate a potential error during signup
        if (Math.random() < 0.5) {
            throw new Error('Database connection failed');
        }

        // Create the user...
        res.json({ message: 'User created' });
    } catch (err) {
        // If an error occurs, log the error and return a generic message to the client
        console.error(err);
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
});

//Other Routes
// CREATE
app.post('/book', (req, res) => {
    if(!req.body.title || !req.body.author) {
        return res.status(400).json({ error: "Title and Author are required for creating a book"
    });
}
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.status(201).json(newBook);
 });
 // READ
 app.get('/book/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if(!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
});
// UPDATE
app.put('/book/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if(!book) {
        return res.status(404).json({ error: "Book not found" });
    }
    if(!req.body.title || !req.body.author) {
        return res.status(400).json({
             error: "Title and Author are required for updating a book"
        });
    }
    book.title = req.body.title;
    book.author = req.body.author;
    res.status(200).json(book);
});
// DELETE
app.delete('/book/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if(bookIndex === -1)
        return res.status(404).json({ error: "Book not found" });
    const deletedBook = books.splice(bookIndex, 1);
    res.status(200).json(deletedBook);
});
   
// This middleware handles all not handled routes
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404; next(err);
});
// This middleware handles all errors
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message || 'Internal Server Error' });
 });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});