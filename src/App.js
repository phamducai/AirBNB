import AddUser from "component/Admin/Dashboard/AddUser";
import Dashboard from "component/Admin/Dashboard/Dashboard";
import GetUser from "component/Admin/Dashboard/GetUser";
import UpdateUser from "component/Admin/Dashboard/UpdateUser";
import Location from "component/Admin/Location/Location";
import Room from "component/Admin/Room/Room";
import react, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginAction } from "redux/actions/AuthAction";
import { getAllCommentsAction } from "redux/actions/CommentsAction";
import DetailRoom from "template/DetailTemplate/DetailRoom";
import AdminTemplate from "templates/AdminTemplate/AdminTemplate";
import Test from "Test";

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
        <Route path="detail" element={<DetailRoom />} />
        <Route path="test" element={<Test />} />
        <Route path="admin" element={<AdminTemplate />}>
          <Route index path="" element={<Dashboard />} />
          <Route path="updateUser/:id" element={<UpdateUser />} />
          <Route path="GetUser/:id" element={<GetUser />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="rooms" element={<Room />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
