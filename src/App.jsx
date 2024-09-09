import "./App.css";
import Blogs from "./components/BLogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleRead = (time) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
    // console.log("hi bor", time)
    console.log(readingTime);
  };

  return (
    <>
      <section className="mx-4 ">
        <Header></Header>

        <div className="md:flex gap-4">
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            handleRead={handleRead}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            readingTime={readingTime}
          ></Bookmarks>
        </div>
      </section>
    </>
  );
}

export default App;
