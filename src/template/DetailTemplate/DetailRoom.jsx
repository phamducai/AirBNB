import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row, Tag, Input, DatePicker, Form, Modal } from "antd";
import {
  AntDesignOutlined,
  CalendarOutlined,
  HeatMapOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  AiOutlineFileDone,
  AiOutlineDotChart,
  AiOutlineYoutube,
  AiOutlineWifi,
  AiOutlineFire,
  AiOutlineCar,
  AiOutlineBorderOuter,
} from "react-icons/ai";
import { getRentalRoomByIDAction } from "redux/actions/RetalRoomAction";

import { PostRoomAction } from "redux/actions/BookRoomAction";

import dayjs from "dayjs";
import { getCommentByRoomAction } from "redux/actions/CommentsAction";

const { RangePicker } = DatePicker;
const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

// Detail Room
const DetailRoom = () => {
  const dispatch = useDispatch();

  const detailRoom = useSelector(
    (state) => state.RoomReducers.getRenderRoomrByID
  );
  const comment = useSelector(
    (state) => state.CommentsReducer.getCommentsWithroom
  );
  //Binh Luan
  console.log(comment);

  useEffect(() => {
    dispatch(getRentalRoomByIDAction(1));
    dispatch(getCommentByRoomAction(3));
  }, []);

  // date
  const [dateRange, setDateRange] = useState(null);

  const onChanges = (dates, dateStrings) => {
    setDateRange(dateStrings);
  };

  // celender
  let days = 0;
  if (dateRange) {
    const start = dayjs(dateRange[0]);
    const end = dayjs(dateRange[1]);
    days = end.diff(start, "day");
  }

  // số lượng khách
  const [num, setNum] = useState(1);
  const incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  const decNum = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  const handleChange = (e) => {
    setNum(e.target.value);
  };

  // post data
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

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container m-auto">
      <h1 className="mt-5 py-2 text-3xl font-bold">{detailRoom?.tenPhong}</h1>
      <img
        className="w-full mb-9 rounded-2xl"
        src={detailRoom?.hinhAnh}
        alt=""
      />
      <Row>
        <Col span={16}>
          <div className="mr-40 border-solid border-rose-300 border-0 border-b-2">
            <h2 className="font-bold text-2xl">
              Toàn bộ căn hộ. Chủ nhà Sungwon
            </h2>
            <p className="text-lg">
              {detailRoom?.khach} phòng khách. {detailRoom?.phongNgu} phòng ngủ.{" "}
              {detailRoom?.phongTam} phòng tắm
            </p>
          </div>
          <div className="text-lg mr-40 border-solid border-rose-300 border-0 border-b-2">
            <div className="flex py-5">
              <AntDesignOutlined className="text-3xl pr-4 font" />
              <div>
                <p className="font-bold mb-0"> Người thiết kế là: </p>
                <span className="text-base text-gray-500">
                  James Atkinson & David McCormick, M-System Orchid House
                </span>
              </div>
            </div>
            <div className="flex pb-5">
              <UserOutlined className="text-3xl pr-4" />
              <div>
                <p className="font-bold mb-0">Sungwon là Chủ nhà siêu cấp</p>
                <span className="text-base text-gray-500">
                  {detailRoom?.moTa}
                </span>
              </div>
            </div>
            <div className="flex pb-5">
              <HeatMapOutlined className="text-3xl pr-4" />
              <div>
                <p className="font-bold mb-0">Địa điểm tuyệt vời</p>
                <span className="text-base text-gray-500">
                  90% khách gần đây đã xếp hạng 5 sao cho vị trí này.
                </span>
              </div>
            </div>
            <div className="flex pb-5">
              <CalendarOutlined className="text-3xl pr-4" />
              <div>
                <p className="font-bold mb-0">Hủy miễn phí trong 48 giờ.</p>
              </div>
            </div>
          </div>
          <div className="mr-40 py-5 border-solid border-rose-300 border-0 border-b-2">
            <img
              className="w-40"
              src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
              alt=""
            />
            <p className="text-lg my-3">
              Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà
              hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn đề
              khác như sự cố trong quá trình nhận phòng.
            </p>
            <a
              className="font-bold text-lg text-black underline pb-4"
              onClick={showModal}
            >
              Tìm hiểu thêm
            </a>
            {/* Modal */}
            <Modal
              width={1200}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div>
                <div className="border-solid border-rose-300 border-0 border-b-2">
                  <img
                    className="w-40"
                    src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
                    alt=""
                  />
                  <p className="text-lg py-3 mb-1">
                    AirCover là chương trình bảo vệ toàn diện, được áp dụng miễn
                    phí với mọi đặt phòng.
                  </p>
                </div>
                <div>
                  <Row>
                    <Col className="pr-4" span={12}>
                      <div className="py-5">
                        <h3 className="text-base font-bold mb-1">
                          Bảo đảm bảo vệ đặt phòng
                        </h3>
                        <span className="text-base text-gray-500">
                          Trong trường hợp hãn hữu khi Chủ nhà cần hủy đặt phòng
                          của bạn trong vòng 30 ngày trước ngày nhận phòng,
                          chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt
                          hơn, hoặc sẽ hoàn tiền cho bạn.
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base font-bold mb-1">
                          Bảo đảm chi phí tương xứng
                        </h3>
                        <span className="text-base text-gray-500">
                          Trong thời gian ở, nếu bạn nhận thấy chỗ ở không đúng
                          như quảng cáo, ví dụ như tủ lạnh ngừng hoạt động và
                          Chủ nhà không thể dễ dàng khắc phục vấn đề này, hoặc
                          số phòng ngủ ít hơn so với thông tin trên mục cho
                          thuê, thì bạn sẽ có 3 ngày để báo cáo vấn đề. Khi đó,
                          chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt
                          hơn, hoặc chúng tôi sẽ hoàn tiền cho bạn.
                        </span>
                      </div>
                    </Col>
                    <Col className="pl-4" span={12}>
                      <div className="py-5">
                        <h3 className="text-base font-bold mb-1">
                          Bảo đảm nhận phòng
                        </h3>
                        <span className="text-base text-gray-500">
                          Nếu bạn không thể nhận phòng và Chủ nhà không thể giải
                          quyết vấn đề này, chúng tôi sẽ tìm cho bạn một chỗ ở
                          tương tự hoặc tốt hơn có thời gian ở tương đương, hoặc
                          chúng tôi sẽ hoàn tiền cho bạn.
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base font-bold mb-1">
                          Đường dây an toàn 24 giờ
                        </h3>
                        <span className="text-base text-gray-500">
                          Nếu cảm thấy không an toàn, bạn sẽ được ưu tiên liên
                          hệ với nhân viên hỗ trợ an toàn được đào tạo đặc biệt
                          của chúng tôi, bất kể ngày đêm.
                        </span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Modal>
          </div>
          <div className="mr-40 py-5 border-solid border-rose-300 border-0 border-b-2">
            <h2 className="text-lg font-bold">Nơi này có những gì cho bạn?</h2>
            <table className="w-full">
              <tbody>
                <tr className="flex gap-52 text-xl">
                  <td className="mb-2 flex flex-col w-auto gap-4">
                    {detailRoom?.mayGiat && (
                      <div>
                        <AiOutlineFileDone /> Máy giặt
                      </div>
                    )}
                    {detailRoom?.banUi && (
                      <div>
                        <AiOutlineDotChart /> Bàn ủi
                      </div>
                    )}
                    {detailRoom?.tivi && (
                      <div>
                        <AiOutlineYoutube /> Ti Vi
                      </div>
                    )}
                    {detailRoom?.dieuHoa && (
                      <div>
                        <AiOutlineFileDone /> Điều hòa
                      </div>
                    )}
                  </td>
                  <td className="mb-2 flex flex-col w-auto gap-4">
                    {detailRoom?.wifi && (
                      <div>
                        <AiOutlineWifi /> Wifi
                      </div>
                    )}
                    {detailRoom?.bep && (
                      <div>
                        <AiOutlineFire /> Bếp
                      </div>
                    )}
                    {detailRoom?.doXe && (
                      <div>
                        <AiOutlineCar /> Đỗ xe
                      </div>
                    )}
                    {detailRoom?.hoBoi && (
                      <div>
                        <AiOutlineBorderOuter /> Hồ bơi
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
        <Col span={8}>
          <div className="shadow-lg shadow-red-300 rounded-2xl">
            <table>
              <tbody>
                <tr>
                  <td colSpan={2} className="px-6">
                    <span className="text-3xl font-bold  text-rose-500">
                      ${detailRoom?.giaTien}
                    </span>
                    <span>/đêm</span>
                    <div className="my-4 border-solid border-gray-300 border-0 border-b-2"></div>
                  </td>
                </tr>
                <tr className="text-center">
                  <td className="pl-3 text-lg font-medium" colSpan={2}>
                    <span className="pr-20">Nhận phòng</span>
                    <span>Trả phòng</span>
                    <RangePicker
                      className="m-5 mt-1"
                      format={"YYYY-MM-DD"}
                      onChange={onChanges}
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="text-lg text-center pl-4" colSpan={2}>
                    <span className="m-0 font-medium">Số lượng khách </span>
                    <span className="text-sm">(Từ 13 tuổi trở lên)</span>
                  </td>
                </tr>
                <tr className="">
                  <td colSpan={2}>
                    <div className="flex justify-center mx-6 mt-1 pb-5 border-solid border-gray-300 border-0 border-b-2">
                      <div>
                        <Button
                          className="bg-slate-300 font-bold hover:bg-rose-500"
                          onClick={decNum}
                        >
                          -
                        </Button>
                      </div>
                      <Input
                        className="form-control text-center w-full"
                        value={num + " khách"}
                        onChange={handleChange}
                      />
                      <div>
                        <Button
                          className="bg-slate-300 font-bold hover:bg-rose-500"
                          onClick={incNum}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="text-center">
                  <td colSpan={2} className="pl-7 pr-7">
                    <Button
                      className="w-full h-full my-3 p-3 bg-rose-500 text-xl rounded-lg font-bold text-white"
                      onClick={PostData}
                    >
                      Đặt phòng
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="text-lg text-gray-600 text-left pl-6 underline">
                    ${detailRoom?.giaTien} x {days} đêm
                  </td>
                  <td className="text-lg text-gray-600 text-right pr-6">
                    {detailRoom?.giaTien * days} $
                  </td>
                </tr>
                <tr>
                  <td className="text-lg text-gray-600 text-left pl-6 underline">
                    Phí dịch vụ
                  </td>
                  <td className="text-lg text-gray-600 text-right pr-6">0 $</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div className="mx-6 my-3 border-solid border-gray-300 border-0 border-b-2"></div>
                  </td>
                </tr>
                <tr>
                  <td className="text-2xl text-left p-6 pt-0 font-bold">
                    Tổng <span className="text-lg">(Chưa VAT)</span>
                  </td>
                  <td className="text-2xl text-right p-6 pt-0 font-bold">
                    {detailRoom?.giaTien * days} $
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <div>
        <h2>Bình Luận</h2>
        <p>Phòng sạch đẹp</p>
      </div>
    </div>
  );
};

export default DetailRoom;
