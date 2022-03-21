import { create } from "axios";

const http = create({
  baseURL: "http://localhost:8888",
  headers: {
    Authorization:
      "Basic VlNUVV9DT05GRVJFTkNFX0NMSUVOVDpWU1RVX0NPTkZFUkVOQ0VfQ0xJRU5U",
  },
});

http.interceptors.response.use((response) => response.data);

export function getToken(data) {
  return http.post("/token?grant_type=password", data);
}
