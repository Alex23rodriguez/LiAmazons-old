import { Link } from "react-router-dom";

const Header = ({ user, logoutFn }) => {
  return (
    <header>
      <Link to='/' style={{ marginRight: "30px" }}>
        Home
      </Link>
      {user ? (
        <>
          <Link to='/profile'>{user}</Link>
          <button onClick={logoutFn}>Logout</button>
        </>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </header>
  );
};

export { Header };
