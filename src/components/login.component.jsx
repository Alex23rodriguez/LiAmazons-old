import { useNavigate } from "react-router-dom";

const Login = (props) => {
  let nav = useNavigate();

  async function testLogin() {
    let myUser = document.getElementById("myUserInput").value;
    await props.loginFn(myUser);
    nav("/");
  }

  return (
    <div>
      Welcome to the login page
      <div id='login-form'>
        <input name='username' type='text' id='myUserInput'></input>
        <input name='password' type='password'></input>
        <button onClick={testLogin}>Login</button>
      </div>
    </div>
  );
};

export { Login };
