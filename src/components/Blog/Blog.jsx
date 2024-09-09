import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark }) => {
  // console.log(handleAddToBookmark);

  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    hashtags,
    reading_time,
  } = blog;
  return (
    <div className="border- b-2 shadow-md my-6 mx-4 p-2 mb-16">
      <img className="rounded-lg mb-6" src={cover} alt="" />

      <div className="flex items-center justify-between my-4">
        <div className="flex gap-4 items-center">
          <img className="w-14 rounded-full" src={author_img} alt="" />

          <div>
            <h4 className="text-2xl font-bold">{author}</h4>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 inline-block">
              {reading_time} min read
            </p>
            <button onClick={() => handleAddToBookmark(blog)}>
              <FaRegBookmark />
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-2">{title}</h2>

      {hashtags.map((hash, idx) => (
        <span className="mr-4" key={idx}>
          {hash}
        </span>
      ))}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.object.object.isRequired,
};

export default Blog;
