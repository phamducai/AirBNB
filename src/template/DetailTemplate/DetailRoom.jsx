import React, { useEffect } from "react";
import { Button, Col, Row, Menu, Tag } from "antd";
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
import { fetchDetailRoomAction } from "redux/actions/detailRoomAction";
import { useParams } from "react-router-dom";

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Khách", "sub1", [getItem("Người lớn từ 13 tuổi trở lên", "1")]),
];

const onClick = (e) => {
  console.log("click ", e);
};

const DetailRoom = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const detailRoom = useSelector((state) => state.detailRoomReducer.detailRoom);

  console.log(detailRoom);

  useEffect(() => {
    const roomID = params.id;

    dispatch(fetchDetailRoomAction(roomID));
  }, [params]);

  return (
    <div className="container m-auto">
      <h1>{detailRoom[0].tenPhong}</h1>
      <img className="w-full" src={detailRoom[0].hinhAnh} alt="" />
      <Row>
        <Col span={16}>
          <div className="pr-52">
            <h2>Chi tiết</h2>
            <p>
              {detailRoom[0].khach} phòng khách, {detailRoom[0].phongNgu} phòng
              ngủ, {detailRoom[0].phongTam} phòng tắm
            </p>
            <hr />
          </div>
          <div className="pr-52">
            <h2>Mô tả</h2>
            <p>{detailRoom[0].moTa}</p>
            <hr />
          </div>
          <div className="pr-52">
            <h2>Tiện nghi</h2>
            <table className="w-full">
              <tr>
                <td>
                  {detailRoom[0].mayGiat && (
                    <Tag color="magenta">
                      <AiOutlineFileDone /> Máy giặt
                    </Tag>
                  )}
                </td>
                <td>
                  {detailRoom[0].banUi && (
                    <Tag color="magenta">
                      <AiOutlineDotChart /> Bàn ủi
                    </Tag>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <AiOutlineYoutube /> Ti Vi
                </td>
                <td>
                  <AiOutlineFileDone /> Điều hòa
                </td>
              </tr>
              <tr>
                <td>
                  <AiOutlineWifi /> Wifi
                </td>
                <td>
                  <AiOutlineFire /> Bếp
                </td>
              </tr>
              <tr>
                <td>
                  <AiOutlineCar /> Có chổ đỗ xe
                </td>
                <td>
                  <AiOutlineBorderOuter /> Hồ bơi
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
          <table className="w-full border-solid border-gray-400 border rounded-xl">
            <tbody>
              <tr>
                <td>Giá tiền/đêm</td>
              </tr>
              <tr>
                <td>Ngày nhận phòng</td>
                <td>Ngày trả phòng</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Menu
                    onClick={onClick}
                    style={{
                      width: "100%",
                    }}
                    mode="inline"
                    items={items}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Button>Đặt phòng</Button>
                </td>
              </tr>
              <tr>
                <td>$45 x 5 đêm</td>
                <td>$221</td>
              </tr>
              <tr>
                <td>Tổng</td>
                <td>$221</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
};

export default DetailRoom;
