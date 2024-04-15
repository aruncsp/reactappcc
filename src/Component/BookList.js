import { useState } from "react";

const booksArray = [
  {
    id: 1,
    title: "Outliers",
    author: "Malcolm Gladwell",
    price: 400,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 471,
  },
  {
    id: 3,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 310,
  },
  {
    id: 4,
    title: "Man’s Search for Meaning",
    author: "Viktor E. Frankl",
    price: 323,
  },
  {
    id: 5,
    title: "Grit",
    author: "Angela Duckworth",
    price: 266,
  },
];

function BookList() {
  const [books, setBooks] = useState(booksArray);

  function AddBook(event) {
    event.preventDefault();
    const newBook = {
      id: booksArray.length + 1,
      title: event.target.Title.value,
      author: event.target.Author.value,
      price: event.target.Price.value,
    };

    setBooks([...books, newBook]);
  }

  return (
    <form onSubmit={AddBook}>
      <input type="text" placeholder="Title" name="Title" />
      <input type="text" placeholder="Author" name="Author" />
      <input type="text" placeholder="Price" name="Price" />

      <button type="submit">Add Book</button>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}

export default BookList;
