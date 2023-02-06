import { baseService } from "./baseService";
export class Room extends baseService {
  // eslint-disable-next-line
  constructor() {
    super();
  }
  //getallroom
  //  /api/phong-thue
  getAllRentalRoom = () => {
    return this.get(`/api/phong-thue`);
  };
  //post room
  // /api/phong-thue
  postRentalRoom = (data) => {
    return this.post(`/api/phong-thue`, data);
  };

  // getroombyLocaltionID
  //   /api/phong-thue/lay-phong-theo-vi-tri
  getRentalRoombyLocaltionID = (locationID) => {
    return this.get(
      `/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${locationID}`
    );
  };

  //   /api/phong-thue/phan-trang-tim-kiem

  getSearchbyPage = (pageIndex = 1, pageSize = 10, keyword = "") => {
    if (keyword.trim() !== "") {
      return this.get(
        `/api/phong-thue/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}`
      );
    } else {
      return this.get(
        `/api/phong-thue/phan-trang-tim-kiem?pageIndex=${pageIndex}&pageSize=${pageSize}&keyword=${keyword}`
      );
    }
  };

  //  GET /api/phong-thue/{id}

  getRentalRoombyID = (roomid) => {
    console.log(roomid);
    return this.get(`/api/phong-thue/${roomid}`);
  };
  //  put /api/phong-thue/{id}
  putRentalRoom = (rommid, data) => {
    return this.put(`/api/phong-thue?id=${rommid}`, data);
  };
  //  delete /api/phong-thue/{id}
  deleteRentalRoom = (rommid) => {
    return this.delete(`/api/phong-thue/${rommid}`);
  };
  //   /api/dat-phong/lay-theo-nguoi-dung/{MaNguoiDung}
  //  POST /api/users/upload-avatar
  postUploadRentalRoom = (formFile, roomid) => {
    return this.post(
      `/api/phong-thue/upload-hinh-phong?maPhong=${roomid}`,
      formFile
    );
  };
}

export const room = new Room();
