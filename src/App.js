import react, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "redux/actions/AuthAction";
import { getAllCommentsAction } from "redux/actions/CommentsAction";

function App() {
  const data = {
    email: "phamducai@gmail.com",
    password: "123",
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCommentsAction());
    dispatch(LoginAction(data));
  }, []);
  return <h1>hello</h1>;
}

export default App;
