import * as axios from 'axios';
debugger;
const baseRout = axios.create({
    baseURL: "Ссылка на бд сюда"
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
