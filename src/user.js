import { useSelector, useDispatch } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
import { useState } from "react";

const UserList = () => {
  const { isloggedin, users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);

  const fetchUser = async () => {
    setloading(true);
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const data = await response.json();
    dispatch({
      type: "LOGIN",
      payload: data,
    });
    setloading(false);
  };

  const handlelogin = () => {
    const age = prompt("what is your age?");
    if (age > 19) {
      fetchUser();
    } else {
      alert("you are not 18");
    }
  };

  const handlelogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <>
      {isloggedin ? (
        <>
          {loading ? (
            <Skeleton variant="text" animation="wave" />
          ) : (
            <>
              {users.map((user) => (
                <h1> {user.title} </h1>
              ))}
            </>
          )}
          <button onClick={handlelogout}>logout</button>
        </>
      ) : (
        <div>
          <button onClick={handlelogin}>login</button>
        </div>
      )}
    </>
  );
};

export default UserList;
