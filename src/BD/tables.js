import * as axios from "axios";
import { clearJournalHeader } from "../reducer/journalsiteReducer";

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
    .get("electronicjournal/students/search?q")
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
  return baseRout
    .get("electronicjournal/disciplines/search?q")
    .then((response) => {
      return response.data;
    });
};
export const getTypeClass = () => {
  return baseRout
    .get("electronicjournal/type-classes/search?q")
    .then((response) => {
      return response.data;
    });
};
export const getGroup = (disciplineId) => {
  return baseRout
    .get(
      `electronicjournal/journal-sites/search?q=discipline.id==${disciplineId};teacher.id==2`
    )
    .then((response) => {
      return response.data;
    });
};
export const getJournalsite = (groupId, disciplineId) => {
  return baseRout
    .get(
      `electronicjournal/journal-sites/search?q=teacher.id==2;discipline.id==${disciplineId};group.id==${groupId}`
    )
    .then((response) => {
      return response.data;
    });
};
export const getTeacher = (surname, id) => {
  return baseRout
    .get(`electronicjournal/teachers/search?q=surname==${surname};id==${id}`)
    .then((response) => {
      return response.data;
    });
};
export const patchJournalsite = async (bodyItems) => {
  await bodyItems.map((m) => {
    let requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(m.content),
    };
    return baseRout
      .patch(
        `electronicjournal/journal-headers/${m.id}/content`,
        JSON.stringify(m.content),
        requestOptions
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally((item) => {
        console.log(requestOptions);
      });
  });
};
