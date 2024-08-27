const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center>
      <div>
        <h2 className="hello">No posts available.</h2>
      </div>
      <button className="btn btn-primary" onClick={onGetPostsClick}>
        Get Posts from server
      </button>
    </center>
  );
};
export default WelcomeMessage;
