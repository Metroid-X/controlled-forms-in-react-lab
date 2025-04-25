import { useState } from 'react';

const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Twokinds - Vol.1', author: 'Tom J. Fischbach' },
        { title: 'The Art Of War', author: 'Sun Tzu' },
        { title: 'TF-Comics issue 1: Ring of Fired', author: 'Jay Pinkerton' }
    ]);

    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });

    const { title, author } = newBook;

    const handleChange = (evt) => {
        setNewBook({ ...newBook, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        try {
            const addBook = newBook;
            setBooks([newBook, ...books]);
        } catch (err) {
            console.log(err);
        };
    };

    console.log(newBook);

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Book Title:</label>
                        <input
                            id='title'
                            type="text"
                            name='title'
                            defaultValue={title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Book Author:</label>
                        <input
                            id='author'
                            type="text"
                            name='author'
                            defaultValue={author}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <button>
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map(book=>(
                    <div>
                        <h4>
                            Title: {book.title}
                            <br /><sup>
                                Author: {book.author}
                            </sup>
                        </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;