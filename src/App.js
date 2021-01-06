import "./App.css";
import { useSelector } from "react-redux";
import UserList from "./user";
// import Login from "./login";

const App = () => {
  const { isloggedin } = useSelector((state) => state.userReducer);

  return (
    <>
      <h1>
        is the user logged in?: {isloggedin ? "logged in" : "logged out"}{" "}
      </h1>
      <UserList/>
    </>
  );
};
export default App;
