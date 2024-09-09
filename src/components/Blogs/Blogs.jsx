import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark, handleRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("public/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3 border">
      <h1 className="m-4 text-2xl text-center font-medium">
        Total blogs : {blogs.length}
      </h1>

      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          handleAddToBookmark={handleAddToBookmark}
          blog={blog}
          handleRead={handleRead}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleRead: PropTypes.func
}
export default Blogs;
