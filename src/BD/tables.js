import * as axios from "axios";
debugger;
const baseRout = axios.create({
  baseURL: "http://192.168.11.252:8082/",
});

export const getMarks = () => {
  return baseRout.get("electronicjournal/marks").then((response) => {
    return response.data;
  });
};
export const getDataLesson = () => {
  return baseRout.get("electronicjournal/dataLesson").then((response) => {
    return response.data;
  });
};
export const getFio = () => {
  return baseRout.get("electronicjournal/fio").then((response) => {
    return response.data;
  });
};
export const getDiscipline = () => {
  return baseRout.get("common-info/disciplines").then((response) => {
    return response.data;
  });
};
