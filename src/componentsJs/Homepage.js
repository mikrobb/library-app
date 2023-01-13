import React from "react";
import { useState, useEffect } from "react";
import Books from "./CardsJs/Books";
import "../componentsCss/Homepage.css";

export default function Homepage() {
  const [search, setSearch] = useState("book");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then((data) => data.json())
      .then((json) => setBooks(json.items));
  }, [setBooks, search]);

  if (!books) return <div>Loading...</div>;
  return (
    <>
      <div>
        <h2 className="titleHomepage">Books Data</h2>
        <input
          className="booksinp"
          placeholder="Type to find a book"
          type="text"
          onChange={(e) =>
            setSearch(e.target.value.length == 0 ? "book" : e.target.value)
          }
        />
      </div>

      <div>
        {books.map((info) => (
          <>
            <Books info={info} />
          </>
        ))}
      </div>
    </>
  );
}
