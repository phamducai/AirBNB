import Dashboard from "component/Admin/Dashboard/Dashboard";
import Location from "component/Admin/Location/Location";
import Room from "component/Admin/Room/Room";
import react, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginAction } from "redux/actions/AuthAction";
import { getAllCommentsAction } from "redux/actions/CommentsAction";
import AdminTemplate from "templates/AdminTemplate/AdminTemplate";

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<AdminTemplate />}>
          <Route index path="" element={<Dashboard />} />
          <Route path="rooms" element={<Room />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
