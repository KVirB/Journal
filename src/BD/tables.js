import * as axios from "axios";

const baseRout = axios.create({
  baseURL: "http://192.168.11.252:8082/",
});

export const getMarks = () => {
  return baseRout.get("electronicjournal/marks").then((response) => {
    return response.data;
  });
};
export const getDataLesson = () => {
  return baseRout
    .get("electronicjournal/journal-headers/search?q")
    .then((response) => {
      return response.data;
    });
};
export const getFio = () => {
  return baseRout
    .get("electronicjournal/journal-sites/search?q")
    .then((response) => {
      return response.data;
    });
};
// export const getDiscipline = () => {
//   return baseRout
//     .get("electronicjournal/disciplines/search?q")
//     .then((response) => {
//       return response.data;
//     });
// };
export const getDiscipline = () => {
  return baseRout.get("common-info/disciplines/").then((response) => {
    return response.data;
  });
};
