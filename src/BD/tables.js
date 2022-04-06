import * as axios from "axios";

const baseRout = axios.create({
  baseURL: "http://192.168.11.252:8082/",
});

export const getStudents = (groupsId) => {
  return baseRout
    .get(`electronicjournal/students/searchByGroup?q=group.name==${groupsId}`)
    .then((response) => {
      return response.data;
    });
};

export const getGeneralStatistics = (groupsId, disciplineId) => {
  return baseRout
    .get(
      `electronicjournal/journal-sites/getAcademicPerformanceByGroupAndDicsipline?q=discipline.id==${disciplineId};group.name==${groupsId}`
    )
    .then((response) => {
      return response.data;
    });
};

export const getDisciplineByStudentStatistic = (disciplineId, studentId) => {
  return baseRout
    .get(
      `electronicjournal/journal-sites/getAcademicPerformanceByDisciplineAndStudent?q=discipline.id==${disciplineId};student.id==${studentId}`
    )
    .then((response) => {
      return response.data;
    });
};

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

export const getDiscipline = () => {
  return baseRout
    .get(
      `electronicjournal/journal-sites/searchWithoutDublicate?q=teacher.idFromSource==${
        JSON.parse(localStorage.getItem("user")).id_from_source
      }`
    )
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
export const getCourseSpec = (groupId) => {
  return baseRout
    .get(`common-info/groups/search?q=name==${groupId}`)
    .then((response) => {
      return response.data;
    });
};
export const getSubGroup = () => {
  return baseRout
    .get(`electronicjournal/sub_groups/search?q=`)
    .then((response) => {
      return response.data;
    });
};
export const getGroup = (disciplineId) => {
  return baseRout
    .get(
      `electronicjournal/journal-sites/searchByTeacherAndDiscipline?q=discipline.id==${disciplineId};teacher.idFromSource==${
        JSON.parse(localStorage.getItem("user")).id_from_source
      }`
    )
    .then((response) => {
      return response.data;
    });
};
export const getGroups = () => {
  return baseRout.get(`electronicjournal/groups/search?q=`).then((response) => {
    return response.data;
  });
};

export const getDisciplinesStatistic = (groupsId) => {
  return baseRout
    .get(
      `electronicjournal/disciplines/searchByGroup?q=group.name==${groupsId}`
    )
    .then((response) => {
      return response.data;
    });
};

export const getJournalsite = (disciplineId, groupId, typeClass, subGroup) => {
  return baseRout
    .get(
      `electronicjournal/journal-sites/filter?teacher_idFromSource=${
        JSON.parse(localStorage.getItem("user")).id_from_source
      }&group_name=${groupId}&discipline_id=${disciplineId}&type_class_id=${typeClass}&sub_group_number=${subGroup}`
    )
    .then((response) => {
      return response.data;
    });
};
export const getTeacher = (surname, teacherId) => {
  return baseRout
    .get(
      `electronicjournal/teachers/search?q=surname==${surname};id==${teacherId}`
    )
    .then((response) => {
      return response.data;
    });
};
export const patchJournalsite = async (bodyItems) => {
  await bodyItems.map((m) => {
    let requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
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
