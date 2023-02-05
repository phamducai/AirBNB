import React, { useEffect, useState } from "react";
import { Button, Col, Row, Tag, Input, Calendar, Dropdown, Space } from "antd";
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
import {
  fetchCheckRoomAction,
  fetchDetailRoomAction,
} from "redux/actions/detailRoomAction";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const items = [
  {
    key: "1",
    label: (
      <div className="w-80">
        <Calendar fullscreen={false} onPanelChange={onPanelChange} value={""} />
      </div>
    ),
  },
];

const DetailRoom = () => {
  const dispatch = useDispatch();

  const detailRoom = useSelector((state) => state.detailRoomReducer.detailRoom);
  const checkRoom = useSelector((state) => state.detailRoomReducer.checklRoom);

  console.log(detailRoom);

  

  useEffect(() => {
    dispatch(fetchDetailRoomAction(2));
    dispatch(fetchCheckRoomAction(2));    
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
          <table className="w-full border-solid border-gray-400 border rounded-xl">
            <tbody>
              <tr>
                <td>
                  <span className="text-2xl font-bold ml-3">
                    ${detailRoom?.giaTien}
                  </span>
                  /đêm
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Ngày nhận phòng
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                  <Input />
                </td>
                <td>
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Ngày trả phòng
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                  <Input/>
                </td>
              </tr>
              <tr>
                <td className="text-lg text-left">
                  Số lượng khách{" "}
                  <span className="text-sm">(Từ 13 tuổi trở lên)</span>
                </td>
                <td className="">
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
                  <Button className="w-1/2 h-auto m-2 bg-rose-500 p-2 text-xl rounded-lg font-bold text-white">
                    Đặt phòng
                  </Button>
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
