import { ReactSearchAutocomplete } from "react-search-autocomplete";
const SearchInput = (props) => {
  const styling = {
    zIndex: "2",
    marginRight: "45px",
    borderRadius: "7px",
    border: "1px solid #EBEBEB",
    searchIconMargin: "0 0 0 16px",
    height: "49px",
    boxShadow: "none",
  };
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };
  return (
    <>
      <div className="reactSearchDiv">
        <ReactSearchAutocomplete
          styling={styling}
          items={props.teachersSearch.map((item) => ({
            id: item.id,
            name: item.surname + " " + item.name + " " + item.patronymic,
            idFromSource: item.idFromSource,
          }))}
          onSelect={(log) =>
            props.getTeacherManagementByIdThunk(log.idFromSource)
          }
          onClear={props.getTeacherManagement}
          // onSearch={props.teachers.length === 1 ? props.getTeacherManagement : ""}
          // onSearch={props.getTeacherManagement}
          placeholder="Поиск..."
          formatResult={formatResult}
          inputDebounce={100}
        />
      </div>
    </>
  );
};
export default SearchInput;
