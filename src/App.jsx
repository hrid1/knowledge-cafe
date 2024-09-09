import "./App.css";
import Blogs from "./components/BLogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useEffect, useState } from "react";

function App() {

  const [bookmarks, setBookmarks] = useState([]);


  const handleAddToBookmark = blog => {
    console.log('bookmark adding soon', blog);
  }
 

  return (
    <>
      <section className="mx-4 ">
        <Header></Header>

       <div className="md:flex gap-4">
       <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
       <Bookmarks></Bookmarks>
       </div>
      </section>
    </>
  );
}

export default App;
