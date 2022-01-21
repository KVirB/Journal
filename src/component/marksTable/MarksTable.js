import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import "../app/App.css";

export default class MarksTable extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.journalsite !== prevProps.journalsite) {
    }
  }
  state = {
    presence: null,
    date: null,
    koko: [],
    x: null,
  };
  getCheckBox = (e) => {
    const { value } = e.target;
    this.setState({
      presence: value,
    });
  };
  save = () => {
    this.props.setJournalHeader();
    setTimeout(() => {
      let header = this.props.journalHeader;
      this.props.getJournalHeaderThunk(header);
      this.props.clearJournalHeader();
    }, 300);
  };
  changeInputHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  componentDidMount() {
    if (localStorage.getItem("journalsite") !== null) {
      let isBoss = window.confirm(
        "С момента прошлой сессии у вас остались не сохраненные данные.Сохранить прошлые изменения?"
      );
      this.props.setJournalHeader();
      if (isBoss === true) {
        setTimeout(() => {
          let header = this.props.journalHeader;
          this.props.getJournalHeaderThunk(header);
          this.props.clearJournalHeader();
          console.log(JSON.stringify(header) + "all good");
          alert("Сохранено");
          localStorage.clear();
          this.props.clearTP();
          window.location.reload();
        }, 1);
      } else {
        localStorage.clear();
        this.props.clearTP();
      }
    }
  }
  render() {
    const { getCheckBox, getDateBox } = this;
    return (
      <div className="all-content">
        <TableContainer sx={{ maxHeight: 760 }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            style={{ maxWidth: 0, minWidth: 0 }}
            className="disp"
          >
            <TableRow>
              {this.props.jh.map((m, i) => {
                if (i === 0)
                  return (
                    <TableCell
                      height="100px"
                      className="line-fio diagonal-line"
                      width="153.55px"
                      key={m.id}
                    >
                      <div className="dzs">Дата</div>
                      <div className="fios">ФИО</div>
                    </TableCell>
                  );
              })}
              {/* {this.props.journalsite.map((m) => */}
              {this.props.jh.map((item, i) => {
                if (i === 0) {
                  return item.content
                    .sort((a, b) => a.id - b.id)
                    .map((content) => (
                      <TableCell
                        height="20px"
                        width="153.55px"
                        className="disp line-stud"
                        key={content.id}
                      >
                        <div>{content.student.surname}</div>
                        <div className="csn">{content.student.name}</div>
                      </TableCell>
                    ));
                }
              })}
              {/* )} */}
            </TableRow>
            {/* {this.props.journalsite.map((m) => */}
            {this.props.jh.map((item, i) => {
              return (
                <tbody key={i}>
                  <TableRow>
                    <TableCell height="100px" className="line-data">
                      <div className="vertical cellwidth">
                        <p>
                          {item.data[0] < 10
                            ? (this.state.x = "0" + item.data[0])
                            : item.data[0]}
                          .
                          {item.data[1] < 10
                            ? (this.state.x = "0" + item.data[1])
                            : item.data[1]}
                          .
                          {item.data[2] < 10
                            ? (this.state.x = "0" + item.data[2])
                            : item.data[2]}
                          <br />
                          {/* {item.typeClass} */}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                  {item.content
                    .sort((a, b) => a.id - b.id)
                    .map((content, i) => {
                      return (
                        <TableRow key={i}>
                          <TableCell className="line-grade disp" height="20px">
                            {content.presence === true && (
                              <select
                                key={content.id}
                                className="sel_grade myInput"
                                name="select"
                                defaultValue={content.grade}
                                onChange={(e) => {
                                  this.props.setBtnFalse();
                                  this.props.setJournalSiteMark(
                                    item.id,
                                    content.id,
                                    e.target.value
                                  );
                                  if (typeof Storage !== "undefined") {
                                    localStorage.setItem(
                                      "journalsite",
                                      JSON.stringify(this.props.journalsite)
                                    );
                                  }
                                }}
                              >
                                <option hidden></option>
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
                            )}

                            <input
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              name="check"
                              className="CHECK"
                              defaultChecked={content.presence}
                              onChange={() => {
                                this.props.setBtnFalse();
                                console.log(
                                  this.props.disabled + "DISABBLE F MARKS"
                                );
                                this.props.toggleJournalSitePresence(
                                  item.id,
                                  content.id
                                );
                                if (typeof Storage !== "undefined") {
                                  localStorage.setItem(
                                    "journalsite",
                                    JSON.stringify(this.props.journalsite)
                                  );
                                }
                              }}
                            ></input>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </tbody>
              );
            })}
            {/* )} */}
          </Table>
        </TableContainer>
      </div>
    );
  }
}
