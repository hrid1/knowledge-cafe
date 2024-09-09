import PropTypes from 'prop-types'

const SingleBookmark = ({ bookmark }) => {
  return (
    <div className="p-4  mx-2 my-4 shadow-sm bg-gray-100 rounded-md">
      <p className="text-3xl font-medium">{bookmark.title}</p>
    </div>
  );
};


SingleBookmark.propTypes = {
    bookmark: PropTypes.object
}
export default SingleBookmark;
