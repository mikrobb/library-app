import "./App.css";
import { useState, useRef, useEffect } from "react";

const url = "https://www.googleapis.com/books/v1/volumes?q=php";

function App() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetch("https://www.googleapis.com/books/v1/volumes?q=php")
  //     .then((data) => data.json())
  //     .then((json) => setBooks(json.items));
  // }, [books]);

  console.log(search);
  console.log(books);

  function GetBooks() {
    // useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + search)
      .then((data) => data.json())
      .then((json) => setBooks(json.items));
    // }, [setBooks]);
  }

  if (!books) return <div>Loading...</div>;
  return (
    <>
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => GetBooks}>Submit</button>
      </div>

      <div>
        {books.map((info) => (
          <div>{info.volumeInfo.title}</div>
        ))}
      </div>
    </>
  );
}

export default App;
