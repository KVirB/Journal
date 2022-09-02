import { create } from "axios";

const http = create({
  baseURL: "http://192.168.11.252:8082/authorization",
  headers: {
    Authorization:
      "Basic VlNUVV9FTEVDVFJPTklDSk9VUk5BTF9DTElFTlQ6VlNUVV9FTEVDVFJPTklDSk9VUk5BTF9DTElFTlQ=",
  },
});

http.interceptors.response.use((response) => response.data);

export function getToken(data) {
  return http.post("/token?grant_type=password", data);
}
