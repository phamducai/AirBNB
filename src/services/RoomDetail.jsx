import { Button, Col, Row, Menu } from "antd";
import React from "react";
import {
  AiOutlineFileDone,
  AiOutlineDotChart,
  AiOutlineYoutube,
  AiOutlineWifi,
  AiOutlineFire,
  AiOutlineCar,
  AiOutlineBorderOuter,
} from "react-icons/ai";

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

const RoomDetail = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div className="container m-auto">
      <h1>Tên phòng</h1>
      <img
        className="w-full"
        src="https://airbnbnew.cybersoft.edu.vn/images/phong1.jpg"
        alt=""
      />
      <Row>
        <Col span={16}>
          <div className="pr-52">
            <h2>Chi tiết</h2>
            <p>6 phòng khách, 2 phòng ngủ</p>
            <hr/>
          </div>          
          <div className="pr-52">
            <h2>Mô tả</h2>
            <p>Phòng sạch sẽ</p>
            <hr/>
          </div>
          <div className="pr-52">
            <h2>Tiện nghi</h2>
            <table className="w-full">
              <tr>
                <td>
                  <AiOutlineFileDone /> Máy giặt
                </td>
                <td>
                  <AiOutlineDotChart /> Bàn ủi
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
            <hr/>
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

export default RoomDetail;
