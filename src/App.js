import { useEffect } from "react";

import Home from "pages/Home/Home";

import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginAction } from "redux/actions/AuthAction";
import { getAllCommentsAction } from "redux/actions/CommentsAction";
import AdminTemplate from "templates/AdminTemplate/AdminTemplate";

import Test from "Test";

import HomeTemplate from "templates/HomeTemplate/HomeTemplate";
import Detail from "pages/Detail/Detail";
import Dashboard from "pages/Admin/Dashboard/Dashboard";
import UpdateUser from "pages/Admin/Dashboard/UpdateUser";
import GetUser from "pages/Admin/Dashboard/GetUser";
import AddUser from "pages/Admin/Dashboard/AddUser";
import Location from "pages/Admin/Location/Location";
import UpdateLocation from "pages/Admin/Location/UpdateLocation";
import GetLocation from "pages/Admin/Location/GetLocation";
import AddLocation from "pages/Admin/Location/AddLocation";
import UpdateRoom from "pages/Admin/Room/UpdateRoom";
import Room from "pages/Admin/Room/Room";
import GetRoom from "pages/Admin/Room/GetRoom";
import AddRoom from "pages/Admin/Room/AddRoom";
import BookRoom from "pages/Admin/Bookroom/BookRoom";
import UpdateBookRoom from "pages/Admin/Bookroom/UpdateBookRoom";
import AddBookRoom from "pages/Admin/Bookroom/AddBookRoom";
import GetBookRoom from "pages/Admin/Bookroom/GetBookRoom";

function App() {
  const data = {
    email: "ai.phamphamducaiadsaf@gmail.com",
    password: "123123",
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCommentsAction());
    dispatch(LoginAction(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="test" element={<Test />} />

        <Route path="" element={<HomeTemplate />}>
          <Route index path="" element={<Home />}></Route>
        </Route>

        <Route path="admin" element={<AdminTemplate />}>
          <Route index path="" element={<Dashboard />} />
          <Route path="updateUser/:id" element={<UpdateUser />} />
          <Route path="GetUser/:id" element={<GetUser />} />
          <Route path="addUser" element={<AddUser />} />

          <Route path="location" element={<Location />} />
          <Route path="location/update/:id" element={<UpdateLocation />} />
          <Route path="location/getbyid/:id" element={<GetLocation />} />
          <Route path="location/addlocation" element={<AddLocation />} />

          <Route path="rooms" element={<Room />} />
          <Route path="rooms/update/:id/:Lid" element={<UpdateRoom />} />
          <Route path="rooms/getbyid/:id/:Lid" element={<GetRoom />} />
          <Route path="rooms/addroom" element={<AddRoom />} />

          <Route path="bookrooms" element={<BookRoom />} />
          <Route
            path="bookrooms/update/:id/:userId/:locationId"
            element={<UpdateBookRoom />}
          />
          <Route
            path="bookrooms/getbyid/:id/:userId/:locationId"
            element={<GetBookRoom />}
          />
          <Route path="bookrooms/addroom" element={<AddBookRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
