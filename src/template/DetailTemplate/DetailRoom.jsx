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
  const dispatch = useDispatch();

  const detailRoom = useSelector((state) => state.detailRoomReducer.detailRoom);

  console.log(detailRoom);

  dispatch(fetchDetailRoomAction(1));

  // useEffect(() => {
  //     dispatch(fetchDetailRoomAction(2));
  // }, [detailRoom]);

  return (
    <div className="container m-auto">
      <h1 className="mt-5 mb-2">{detailRoom?.tenPhong}</h1>
      <img className="w-full mb-5" src={detailRoom?.hinhAnh} alt="" />
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
              <tr>
                <td>
                  <div className="mb-2">
                  {detailRoom?.mayGiat && (
                    <Tag color="magenta">
                      <AiOutlineFileDone /> Máy giặt
                    </Tag>
                  )}
                  {detailRoom?.banUi && (
                    <Tag color="magenta">
                      <AiOutlineDotChart /> Bàn ủi
                    </Tag>
                  )}
                  {detailRoom?.tivi && (
                    <Tag color="magenta">
                      <AiOutlineYoutube /> Ti Vi
                    </Tag>
                  )}
                  {detailRoom?.dieuHoa && (
                    <Tag color="magenta">
                      <AiOutlineFileDone /> Điều hòa
                    </Tag>
                  )}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  {detailRoom?.wifi && (
                    <Tag color="magenta">
                      <AiOutlineWifi /> Wifi
                    </Tag>
                  )}
                  {detailRoom?.bep && (
                    <Tag color="magenta">
                      <AiOutlineFire /> Bếp
                    </Tag>
                  )}
                  {detailRoom?.doXe && (
                    <Tag color="magenta">
                      <AiOutlineCar /> Đỗ xe
                    </Tag>
                  )}
                  {detailRoom?.hoBoi && (
                    <Tag color="magenta">
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
