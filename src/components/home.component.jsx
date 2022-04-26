import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Welcome to LiAmazons.online!</div>
      <p>How would you like to play?</p>
      <Link to='/games/local'>Local Play</Link>
      <Link to='/lobby'>Online Play</Link>
    </>
  );
};

export default Home;
