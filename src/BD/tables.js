import * as axios from 'axios';
debugger;
const baseRout = axios.create({
    baseURL: "http://192.168.11.252:8082/electronicjournal/"
    }
)

export const getMarks = () => {
    return baseRout.get("marks").then(response => {return response.data})
}
export const getDataLesson = () => {
    return baseRout.get("dataLesson").then(response => {return response.data})
}
export const getFio = () => {
    return baseRout.get("fio").then(response => {return response.data})
}
export const getDiscipline = () => {
    return baseRout.get("disciplines").then(response => {return response.data})
}
