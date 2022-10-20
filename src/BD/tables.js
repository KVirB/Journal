import * as axios from "axios";
import { useAuth } from "../hooks/useAuth";
// axios.default.headers.common["Authorization"] =
//   "Bearer" + JSON.parse(localStorage.getItem("user")).access_token;
// var baseRout = axios.create({
//   baseURL: "http://192.168.11.252:8082/",
// });
// if (localStorage.getItem("user") !== null) {
//   baseRout = axios.create({
//     baseURL: "http://192.168.11.252:8082/",
//     headers: {
//       Authorization:
//         "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
//     },
//   });
// }
const defaultOptionsGetImage = {
  baseURL: "http://192.168.11.252:8084/",
  headers: {
    "Content-Type": false,
  },
};

let baseRoutGetImage = axios.create(defaultOptionsGetImage);

baseRoutGetImage.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem("user")).access_token;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

const defaultOptions = {
  baseURL: "http://192.168.11.252:8082/",
  headers: {
    "Content-Type": "application/json",
  },
};

let baseRout = axios.create(defaultOptions);

baseRout.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem("user")).access_token;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export const getExcelFaculty = (facultyId, firstDate, secondDate) => {
  return (
    baseRout
      // utils/myExcel?groupName=& period=2022-03-21and...
      .request({
        url: `electronicjournal/utils/mySecondExcel?cathedraName=${facultyId}&period=${firstDate}and${secondDate}`,
        method: "GET",
        responseType: "blob",
      })
      .then(({ data }) => {
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        let fileName = `Отчёт по платным отработкам ${facultyId}`;
        link.href = downloadUrl;
        link.setAttribute("download", fileName + ".xlsx");
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((error) => {
        if (error.response.status === 500) {
          getExcel(facultyId);
        } else {
          alert("Упс, что-то пошло не так :(");
        }
      })
  );
};

export const getExcel = (groupsId, firstDate, secondDate) => {
  return baseRout
    .request({
      url: `electronicjournal/utils/myExcel?groupName=${groupsId}&period=${firstDate}and${secondDate}`,
      method: "GET",
      responseType: "blob",
    })
    .then(({ data }) => {
      const downloadUrl = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");
      let fileName = `Отчёт по группе ${groupsId}`;
      link.href = downloadUrl;
      link.setAttribute("download", fileName + ".xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
    .catch((error) => {
      if (error.response.status === 500) {
        getExcel(groupsId);
      } else {
        alert("Упс, что-то пошло не так :(");
      }
    });
};

export const getFacultys = () => {
  return baseRout
    .get(`electronicjournal/departments/search?q=`)
    .then((response) => {
      return response.data;
    });
};

export const getStudentsStatisticByPeriod = (
  studentId,
  firstDate,
  secondDate
) => {
  return baseRout
    .get(
      `electronicjournal/journal-headers/getAcademicPerformance?q=student.id==${studentId};dateOfLesson==${firstDate}and${secondDate}`
    )
    .then((response) => {
      return response.data;
    });
};

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

export const getGeneralGroupStatistics = (groupsId) => {
  return baseRout
    .get(
      `electronicjournal/journal-sites/getAcademicPerformanceByGroupAndDicsipline?q=group.name==${groupsId}`
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
      `electronicjournal/disciplines/searchDisciplinesByTeacher?q=teacher.idFromSource==${
        localStorage.getItem("idSourse") === null
          ? JSON.parse(localStorage.getItem("user")).id_from_source
          : localStorage.getItem("idSourse")
      }`
    )

    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      err.toJSON().status === 401
        ? localStorage.clear("user")
        : console.log(err.toJSON().status);
      err.toJSON().status === 401
        ? window.location.reload()
        : console.log(err.toJSON());
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
        localStorage.getItem("idSourse") === null
          ? JSON.parse(localStorage.getItem("user")).id_from_source
          : localStorage.getItem("idSourse")
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
      `electronicjournal/disciplines/searchDisciplinesByTeacher?q=group.name==${groupsId}`
    )
    .then((response) => {
      return response.data;
    });
};

export const getTeachersManagements = () => {
  return baseRout
    .get(`electronicjournal/teachers/search?q=`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err !== null) {
        if (err.toJSON().status === 401) {
          localStorage.clear("user");
        }
        if (err.response) {
          window.location.reload();
        } else if (err.request) {
          console.log(err.request);
        }
      }
    });
};

export const getTeacherProfile = (idFromSource) => {
  return (
    baseRout
      // .get(
      //   `electronicjournal/teachers/search?q=idFromSource==${
      //     localStorage.getItem("idSourse") === null
      //       ? JSON.parse(localStorage.getItem("user")).id_from_source
      //       : localStorage.getItem("idSourse")
      //   }`
      // )
      .get(`electronicjournal/teachers/search?q=idFromSource==${idFromSource}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        err.toJSON().status === 401
          ? localStorage.clear("user")
          : console.log(err.toJSON().status);
        err.toJSON().status === 401
          ? window.location.reload()
          : console.log(err.toJSON());
      })
  );
};

export const getJournalsite = (disciplineId, groupId, typeClass, subGroup) => {
  return baseRout
    .get(
      `electronicjournal/journal-sites/filter?teacher_idFromSource=${
        localStorage.getItem("idSourse") === null
          ? JSON.parse(localStorage.getItem("user")).id_from_source
          : localStorage.getItem("idSourse")
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
  let itemNumber = 0;
  await bodyItems.map((m) => {
    let number = ++itemNumber;
    let requestOptions = {
      method: "PATCH",
      // "Authorization": `Bearer + ${localStorage.getItem("user").access_token}`
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
        console.log(number, "resp");
        console.log(bodyItems.length, "leng");
        if (bodyItems.length === number) {
          window.location.href = "/electronicaljournal-view/teacher_profile";
        }
      });
  });
};
export const postProfileImage = (image_name, image, idFromSource) => {
  console.log(image);
  return baseRoutGetImage
    .post(
      `/utils/upload?name=${image_name}&id_from_source=${idFromSource}`,
      image
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response);
      if (error.response.status === 400) {
        alert("Вы превысили допустимый размер фото! Допустимый размер 131072");
      }
    });
};
