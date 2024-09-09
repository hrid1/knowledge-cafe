import SingleBookmark from "../SingleBookmark/SingleBookmark";
import { FaRegClock } from "react-icons/fa";
import Proptypes from "prop-types";


const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="my-8 border py-6 rounded-lg">
        <h3 className="text-3xl font-semibold text-center flex gap-4 items-center justify-center">
          <FaRegClock />
          Reading Time: {readingTime}
        </h3>
      </div>

      <h2 className="text-2xl font-bold my-4">
        Bookmarks : {bookmarks.length}
      </h2>

      <div>
        {bookmarks.map((bookmark) => (
          <SingleBookmark
            key={bookmark.id}
            bookmark={bookmark}
          ></SingleBookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: Proptypes.array,
  readingTime: Proptypes.func,
};

export default Bookmarks;
