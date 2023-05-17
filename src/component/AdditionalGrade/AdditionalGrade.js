import React, { useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useEffect } from "react";
import Select from "react-select";

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
  const [columnDefs, setColumnDefs] = useState([
    { headerName: "Дата", field: "dateOfLesson", editable: false },
    { headerName: "Фамилия", field: "student.surname", editable: false },
    { headerName: "Имя", field: "student.name", editable: false },
    { headerName: "Отчество", field: "student.patronymic", editable: false },
    { headerName: "Тип", field: "typeGrade.name", editable: false },
    { headerName: "Тема", field: "description" },
    { headerName: "Оценка", field: "grade" },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      floatingFilter: true,
      filter: true,
      sortable: true,
      editable: true,
    };
  }, []);
  const getRowId = useMemo(() => {
    return (params) => params.data.id;
  }, []);
  // const onGridReady = useCallback(
  //   (params) => {
  //     setRowData(rowData);
  //   },
  //   [props.getAdditionalGrade]
  // );
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

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "calc(100vh - 100px)", width: "100vw", margin: "auto" }}
    >
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
          onChange={(e) => setTypeGrade(e.value)}
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
      {console.log(props.isLoad)}
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={defaultColDef}
        onCellEditRequest={onCellEditRequest}
        getRowId={getRowId}
        readOnlyEdit={true}
        // onGridReady={onGridReady}
      ></AgGridReact>
    </div>
  );
};

export default AdditionalGrade;
