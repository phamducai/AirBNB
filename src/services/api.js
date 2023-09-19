import axios from "axios";

const requester = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjciLCJIZXRIYW5TdHJpbmciOiIyMi8wNy8yMDI4IiwiSGV0SGFuVGltZSI6IjE2ODk5ODQwMDAwMDAiLCJuYmYiOjE2NzE1NTU2MDAsImV4cCI6MTY5MDEzMTYwMH0.LNJz-GRMusj28AN7uSvQ3f8pv9Hu68HDViaqwK4mdPs",
  },
});

//interceptor
requester.interceptors.request.use((req) => {
  req.headers = {
    ...req.headers,
    token: localStorage.getItem("token"),
  };

  return req;
});
requester.interceptors.response.use();

export default requester;
