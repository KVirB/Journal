/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useEffect } from "react";
import Select from "react-select";
import { AG_GRID_LOCALE_RU } from "../../localization/localizationAgGrid";
const AdditionalGrade = (props) => {
  // if (props.isLoad === true) {
  //   props.getAdditionalGradeThunk(
  //     localStorage.getItem("groupName"),
  //     localStorage.getItem("disciplineId")
  //   );
  // }
  useEffect(() => {
    setRowData(props.additionalGrades);
  }, [props.additionalGrades]);
  let [grade, setGrade] = useState();
  let [theme, setTheme] = useState();
  let [date, setDate] = useState();
  let [typeGrade, setTypeGrade] = useState();
  let [student, setStudent] = useState();
  let [rowData, setRowData] = useState();
  let [rowId, setRowId] = useState(null);
  let [studentSort, setStudentSort] = useState(0);
  let [dateSort, setDateSort] = useState(null);
  let [selectedOption, setSelectedOption] = useState("Студент");
  const [columnDefs, setColumnDefs] = useState([
    // { checkboxSelection: true, maxWidth: 50 },
    {
      headerName: "Дата",
      editable: false,
      field: "dateOfLesson",
    },
    { headerName: "Фамилия", field: "student.surname", editable: false },
    {
      headerName: "Имя",
      field: "student.name",
      editable: false,
      sortable: false,
    },
    {
      headerName: "Отчество",
      field: "student.patronymic",
      editable: false,
      sortable: false,
    },
    { headerName: "Тип", field: "typeGrade.name", editable: false },
    { headerName: "Тема", field: "description" },
    { headerName: "Оценка", field: "grade", sortable: false },
  ]);
  const handleClear = () => {
    setSelectedOption("Студент");
  };
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      // floatingFilter: true,
      filter: true,
      sortable: true,
      editable: true,
    };
  }, []);
  const getRowId = useMemo(() => {
    return (params) => params.data.id;
  }, []);
  const onRowClicked = (event) => {
    setRowId(event.data.id);
  };
  // const onGridReady = useCallback((params) => {
  //   props.getAdditionalGradeThunk(
  //     localStorage.getItem("groupName"),
  //     localStorage.getItem("disciplineId")
  //   );
  // }, []);
  const onCellEditRequest = useCallback(
    (event) => {
      const data = event.data;
      const field = event.colDef.field;
      const newValue = event.newValue;
      const oldItem = rowData.find((row) => row.id === data.id);

      if (!oldItem || !field) {
        return;
      }
      const newItem = { ...oldItem };
      newItem[field] = newValue;
      console.log("onCellEditRequest, updating " + field + " to " + newValue);
      rowData = rowData.map((oldItem) =>
        oldItem.id == newItem.id ? newItem : oldItem
      );
      setRowData(rowData);
      props.getAdditionalGradeEdit(data.id, field, newValue);

      console.log(field, newValue);
    },
    [rowData]
  );

  const deleteAdditionalGrade = (id) => {
    setRowData(rowData.filter((item) => item.id !== id));
  };

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "calc(100vh - 200px)", width: "100vw", margin: "auto" }}
    >
      <div className="p_info_div">
        <p className="p_group">Группа: {localStorage.getItem("groupName")}</p>
        <p className="p_discipline">
          Дисциплина: {localStorage.getItem("disciplineName")}
        </p>
      </div>
      <div className="selects_additional_grade_div">
        <div className="selects_additional_grade">
          <Select
            className="student_select_additional_grade"
            onChange={(e) => setStudent(e.value)}
            defaultValue={{ value: "students", label: "Студент" }}
            options={props.students.map((m) => ({
              value: m.id,
              label: m.surname + " " + m.name,
            }))}
          />
          <Select
            className="type_select_additional_grade"
            onChange={(e) => {
              setTypeGrade(e.value);
            }}
            defaultValue={{ value: "typeGrade", label: "Тип" }}
            options={props.typeGrades.map((m) => ({
              value: m.id,
              label: m.name,
            }))}
          />
          <input
            type="date"
            className="date_select_additional_grade"
            min="2022-01-01"
            max="2025-12-31"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <input
            type="text"
            className="theme_input_additional_grade"
            onChange={(e) => {
              setTheme(e.target.value);
            }}
          />
          <select
            className="grade_select_additional_grade"
            onChange={(e) => setGrade(e.target.value)}
          >
            <option selected>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <button
            className="add_button_additional_grade"
            onClick={() => {
              props.getAdditionalGradeAdd(
                student,
                localStorage.getItem("disciplineId"),
                typeGrade,
                date,
                theme,
                grade
              );
            }}
          >
            Добавить
          </button>
        </div>
        <div className="delete_button_additional_div">
          <button
            className="delete_button_additional_grade"
            onClick={() => {
              props.getAdditionalGradeDelete(rowId);
              deleteAdditionalGrade(rowId);
            }}
          >
            Удалить
          </button>
        </div>
      </div>
      <p className="p_sort">Сортировка</p>
      <div className="sort_additional_grade_div">
        <Select
          className="student_select_additional_grade"
          value={{ value: selectedOption, label: selectedOption }}
          onChange={(e) => {
            setSelectedOption(e.label);
            setStudentSort(e.value);
            props.getAdditionalGradeThunk(
              localStorage.getItem("groupName"),
              localStorage.getItem("disciplineId"),
              e.value,
              dateSort
            );
          }}
          options={props.students.map((m) => ({
            value: m.id,
            label: m.surname + " " + m.name,
          }))}
        />
        <input
          type="date"
          className="date_select_additional_grade"
          min="2022-01-01"
          max="2025-12-31"
          value={dateSort === null ? "гггг-мм-дд" : dateSort}
          onChange={(e) => {
            setDateSort(e.target.value);
            props.getAdditionalGradeThunk(
              localStorage.getItem("groupName"),
              localStorage.getItem("disciplineId"),
              studentSort,
              e.target.value
            );
          }}
        />
        <button
          className="reset_sort_button"
          onClick={() => {
            props.getAdditionalGradeThunk(
              localStorage.getItem("groupName"),
              localStorage.getItem("disciplineId"),
              0,
              null
            );
            setDateSort(null);
            setStudentSort(0);
            handleClear();
          }}
        >
          Сбросить
        </button>
      </div>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={defaultColDef}
        onCellEditRequest={onCellEditRequest}
        getRowId={getRowId}
        readOnlyEdit={true}
        onRowClicked={onRowClicked}
        localeText={AG_GRID_LOCALE_RU}
        rowSelection={"single"}
        // onGridReady={onGridReady}
      ></AgGridReact>
    </div>
  );
};

export default AdditionalGrade;
