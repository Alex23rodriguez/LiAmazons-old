import { Link } from "react-router-dom";

const Lobby = () => {
  return (
    <>
      <div>
        <p>Join game</p>
        <input type='text' defaultValue='Enter Game Id...'></input>
      </div>
      <div style={{ marginTop: "30px" }}>
        <button>Create game</button>
      </div>
    </>
  );
};
export default Lobby;
