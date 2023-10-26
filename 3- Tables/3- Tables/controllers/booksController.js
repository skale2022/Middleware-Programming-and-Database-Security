const Book = require('../models/bookModel');
var smaplebooks =[
    {
        "title": "Zen Coding",
        "author": "John Doe",
        "description": "Zen Coding is an editor plugin for high-speed HTML coding and editing. The core of this plugin is a powerful abbreviation engine which allows you to expand expressions—similar to CSS selectors—into HTML code. ",
        "exchangeType": "trade",
        "owner": "5f9d7b3b8b0b7b1b1c1b1b1b",
        "status":"available",
        "timestamps":"2020-10-30T14:00:00.000+00:00"
    },
    {
        "title": "Node Coding",
        "author": "John Doe",
        "description": "Zen Coding is an editor plugin for high-speed HTML coding and editing. The core of this plugin is a powerful abbreviation engine which allows you to expand expressions—similar to CSS selectors—into HTML code. ",
        "exchangeType": "trade",
        "owner": "5f9d7b3b8b0b7b1b1c1b1b1d",
        "status":"available",
        "timestamps":"2020-10-30T14:00:00.000+00:00"
    },
    {
        "title": "Java Coding",
        "author": "John Doe",
         "description": "Zen Coding is an editor plugin for high-speed HTML coding and editing. The core of this plugin is a powerful abbreviation engine which allows you to expand expressions—similar to CSS selectors—into HTML code. ",
        "exchangeType": "trade",
        "owner": "5f9d7b3b8b0b7b1b1c1b1b1e",
        "status":"available",
        "timestamps":"2020-10-30T14:00:00.000+00:00"
    },
    {
        "title": "C# Coding",
        "author": "John Doe",
        "description": "Zen Coding is an editor plugin for high-speed HTML coding and editing. The core of this plugin is a powerful abbreviation engine which allows you to expand expressions—similar to CSS selectors—into HTML code. ",
        "exchangeType": "trade",
        "owner": "5f9d7b3b8b0b7b1b1c1b1b1c",
        "status":"available",
        "timestamps":"2020-10-30T14:00:00.000+00:00"
    },

  
]

// GET all books
exports.getBooks = async (req, res) => {
    try {
            const books= smaplebooks;
            // but in UI you will render a view
            res.render('bookList', { title: 'Books List ',  books:books});
        }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

