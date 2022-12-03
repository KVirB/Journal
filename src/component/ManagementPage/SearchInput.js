import { ReactSearchAutocomplete } from "react-search-autocomplete";
const SearchInput = (props) => {
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };
  return (
    <>
      <ReactSearchAutocomplete
        items={props.teachersSearch.map((item) => ({
          id: item.idFromSource,
          name: item.surname + " " + item.name + " " + item.patronymic,
        }))}
        onSelect={(log) => props.getTeacherManagementByIdThunk(log.id)}
        onClear={props.getTeacherManagement}
        // onSearch={props.teachers.length === 1 ? props.getTeacherManagement : ""}
        // onSearch={props.getTeacherManagement}
        placeholder="Поиск..."
        formatResult={formatResult}
        inputDebounce={100}
      />
    </>
  );
};
export default SearchInput;
