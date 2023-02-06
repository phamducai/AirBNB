import React, { useEffect, useState } from "react";
import { Button, Col, Row, Tag, Input, DatePicker, Form } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import {
  AiOutlineFileDone,
  AiOutlineDotChart,
  AiOutlineYoutube,
  AiOutlineWifi,
  AiOutlineFire,
  AiOutlineCar,
  AiOutlineBorderOuter,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getRentalRoomByIDAction } from "redux/actions/RetalRoomAction";

import { PostRoomAction } from "redux/actions/BookRoomAction";

import dayjs from "dayjs";
import { getCommentByRoomAction } from "redux/actions/CommentsAction";
const { RangePicker } = DatePicker;
const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const DetailRoom = () => {
  const dispatch = useDispatch();

  const detailRoom = useSelector(
    (state) => state.RoomReducers.getRenderRoomrByID
  );

  const [dateRange, setDateRange] = useState(null);

  const onChanges = (dates, dateStrings) => {
    setDateRange(dateStrings);
  };

  let days = 0;
  if (dateRange) {
    const start = dayjs(dateRange[0]);
    const end = dayjs(dateRange[1]);
    days = end.diff(start, "day") + 1;
  }

  useEffect(() => {
    dispatch(getRentalRoomByIDAction(1));
    dispatch(getCommentByRoomAction(3));
  }, []);

  const [num, setNum] = useState(0);
  const incNum = () => {
    if (num < 5) {
      setNum(Number(num) + 1);
    }
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const handleChange = (e) => {
    setNum(e.target.value);
  };

  const PostData = async () => {
    const data = {
      id: 0,
      maPhong: 2,
      ngayDen: dateRange ? dateRange[0] : 0,
      ngayDi: dateRange ? dateRange[1] : 0,
      soLuongKhach: num,
      maNguoiDung: 2171,
    };
    await dispatch(PostRoomAction(data));
    console.log(data);
  };
  //Binh Luan
  const Comment = useSelector(
    (state) => state.CommentsReducer.getCommentsWithroom
  );
  console.log(Comment);
  return (
    <div className="container m-auto">
      <h1 className="mt-5 mb-2">{detailRoom?.tenPhong}</h1>
      <img className="w-full mb-9" src={detailRoom?.hinhAnh} alt="" />
      <Row>
        <Col span={16}>
          <div className="pr-52">
            <h2>Chi tiết</h2>
            <p>
              {detailRoom?.khach} phòng khách, {detailRoom?.phongNgu} phòng ngủ,{" "}
              {detailRoom?.phongTam} phòng tắm
            </p>
            <hr />
          </div>
          <div className="pr-52">
            <h2>Mô tả</h2>
            <p>{detailRoom?.moTa}</p>
            <hr />
          </div>
          <div className="pr-52">
            <h2>Tiện nghi</h2>
            <table className="w-full">
              <tr className="flex gap-16">
                <td className="mb-2 flex flex-col w-auto gap-2">
                  {detailRoom?.mayGiat && (
                    <Tag color="magenta" className="text-base">
                      <AiOutlineFileDone /> Máy giặt
                    </Tag>
                  )}
                  {detailRoom?.banUi && (
                    <Tag color="magenta" className="text-base">
                      <AiOutlineDotChart /> Bàn ủi
                    </Tag>
                  )}
                  {detailRoom?.tivi && (
                    <Tag color="magenta" className="text-base">
                      <AiOutlineYoutube /> Ti Vi
                    </Tag>
                  )}
                  {detailRoom?.dieuHoa && (
                    <Tag color="magenta" className="text-base">
                      <AiOutlineFileDone /> Điều hòa
                    </Tag>
                  )}
                </td>
                <td className="mb-2 flex flex-col w-auto gap-2">
                  {detailRoom?.wifi && (
                    <Tag color="magenta" className="text-base">
                      <AiOutlineWifi /> Wifi
                    </Tag>
                  )}
                  {detailRoom?.bep && (
                    <Tag color="magenta" className="text-base">
                      <AiOutlineFire /> Bếp
                    </Tag>
                  )}
                  {detailRoom?.doXe && (
                    <Tag color="magenta" className="text-base">
                      <AiOutlineCar /> Đỗ xe
                    </Tag>
                  )}
                  {detailRoom?.hoBoi && (
                    <Tag color="magenta" className="text-base">
                      <AiOutlineBorderOuter /> Hồ bơi
                    </Tag>
                  )}
                </td>
              </tr>
            </table>
            <hr />
          </div>
          <div>
            <h2>Bình Luận</h2>
            <p>Phòng sạch đẹp</p>
          </div>
        </Col>
        <Col span={8}>
          <div className="shadow-2xl">
            <table className="rounded-2xl">
              <tbody>
                <tr>
                  <td>
                    <span className="text-3xl font-bold ml-3 text-rose-500">
                      ${detailRoom?.giaTien}
                    </span>
                    /đêm
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="pl-4">
                    <RangePicker format={"YYYY-MM-DD"} onChange={onChanges} />
                  </td>
                </tr>
                <tr>
                  <td className="text-lg text-left pl-4">
                    <p className="m-0">Số lượng khách</p>
                    <span className="text-sm">(Từ 13 tuổi trở lên)</span>
                  </td>
                  <td>
                    <div className="input-group flex justify-center">
                      <div>
                        <Button type="primary" shape="circle" onClick={decNum}>
                          -
                        </Button>
                      </div>
                      <Input
                        className="form-control text-center w-12"
                        value={num}
                        onChange={handleChange}
                      />
                      <div>
                        <Button type="primary" shape="circle" onClick={incNum}>
                          +
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="text-center">
                  <td colSpan={2}>
                    <Button
                      className="w-1/2 h-auto m-10 bg-rose-500 p-2 text-xl rounded-lg font-bold text-white"
                      onClick={PostData}
                    >
                      Đặt phòng
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="text-lg text-left pl-4">
                    ${detailRoom?.giaTien} x 5 đêm
                  </td>
                  <td className="text-lg text-right pr-4">${num}</td>
                </tr>
                <tr>
                  <td className="p-4" colSpan={2}>
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td className="text-lg text-left pl-4 font-bold">Tổng</td>
                  <td className="text-lg text-right pr-4 font-bold">$221</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DetailRoom;
