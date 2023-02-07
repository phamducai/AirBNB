import React, { Fragment } from "react";
import { Button, Table, Input } from "antd";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import dayjs from "dayjs";

import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import {
  deleteRooomAction,
  getAllRoomAction,
} from "redux/actions/BookRoomAction";
import { getAllRentalRoomAction } from "redux/actions/RetalRoomAction";

import { getAlllocationAction } from "redux/actions/LocationAction";

const { Search } = Input;

function BookRoom() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRoomAction());
    dispatch(getAllRentalRoomAction());
    dispatch(getAlllocationAction());
    dispatch({ type: "DELETE_BOOK_ROOM" });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const BookRoom = useSelector((state) => state.BookRoomReducer.getAllRoom);

  const room = useSelector((state) => state.RoomReducers.getAllRenderRoom);

  const AllLocations = useSelector(
    (state) => state.LocationReducer.getAllLocation
  );

  //   let uniqueArray = _.uniqBy(BookRoom, "maPhong");

  console.log(BookRoom);
  const AllLocation = AllLocations?.map(({ hinhAnh, ...rest }) => rest);

  let combinedArrays = BookRoom?.map((room1) => {
    let match = room?.find((item) => room1.maPhong === item.id);
    return { ...match, ...room1 };
  });

  //   let combinedArray = combinedArrays.filter((obj) => obj.maPhong !== 0);

  let combinedArray2 = combinedArrays?.map((roomss) => {
    let location = AllLocation?.find(
      (location) => roomss.maViTri === location.id
    );
    return { ...location, ...roomss };
  });

  const columns = [
    {
      title: "Room ID",
      dataIndex: "maPhong",
      width: "5%",
      sorter: (a, b) => {
        return a.maPhong - b.maPhong;
      },
      sortOrder: "ascend",
    },
    {
      title: "Name",
      dataIndex: "tenPhong",
      width: "20%",
      render: (text) => {
        return (
          <Fragment>
            {text?.length > 20 ? text.substr(0, 20) + " ..." : text}
          </Fragment>
        );
      },
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      width: "10%",
      render: (text) => {
        return (
          <Fragment>
            <img
              src={text}
              alt={text}
              width={60}
              height={60}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/60/60`;
              }}
            />
          </Fragment>
        );
      },
    },
    {
      title: "Location",
      dataIndex: "tenViTri",
      width: "15%",
    },
    {
      title: "Guest Max",
      dataIndex: "soLuongKhach",
      width: "5%",
    },
    {
      title: "Start Date -End Date",
      dataIndex: "ngayDen",
      width: "12%",
      render: (text) => {
        return <Fragment>{dayjs(text).format("DD/MM/YYYY")}</Fragment>;
      },
    },
    {
      title: "End Date",
      dataIndex: "ngayDi",
      width: "12%",
      render: (text) => {
        return <Fragment>{dayjs(text).format("DD/MM/YYYY")}</Fragment>;
      },
    },
    {
      title: "Action",
      fixed: "right",
      width: "30%",
      render: (text, item) => {
        return (
          <>
            <NavLink
              key="11"
              className=" mr-2  text-2xl"
              to={`/admin/bookrooms/getbyid/${item.id}/${item.maNguoiDung}/${item.maViTri}`}
            >
              <EyeOutlined />
            </NavLink>
            <NavLink
              key="10"
              className=" mr-1 text-2xl"
              to={`/admin/bookrooms/update/${item.id}/${item.maNguoiDung}/${item.maViTri}`}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span style={{ cursor: "pointer" }} key="9" className="text-2xl">
              <DeleteOutlined
                style={{ color: "red" }}
                onClick={() => {
                  dispatch(deleteRooomAction(item.id));
                  // if (
                  //   window.confirm(
                  //     "Are you sure you want to delete" + item.id + "?"
                  //   )
                  // ) {
                  //   dispatch(deleteRooomAction(item.id));
                  //   dispatch(getAllRoomAction());
                  //   dispatch(getAllRentalRoomAction());
                  //   dispatch(getAlllocationAction());
                  //   alert("DELETE Success");
                  // }
                }}
              />{" "}
            </span>
          </>
        );
      },
    },
  ];
  const data = Array.isArray(combinedArray2)
    ? combinedArray2
    : [combinedArray2];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const onsearch = async (e) => {
    // await dispatch(getAdminUserByNameUserAction(e.target.value));
  };

  return (
    combinedArray2[1]?.tenViTri && (
      <div>
        <h1 className="text-3xl mb-5">User Management</h1>
        <Link to="/admin/bookrooms/addroom">
          <Button className="mb-5">Add User</Button>
        </Link>
        <Search
          placeholder="
        User Search By Name"
          enterButton="Search"
          size="large"
          name="search"
          onChange={onsearch}
        />
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          rowKey={"id"}
        />
      </div>
    )
  );
}

export default BookRoom;
