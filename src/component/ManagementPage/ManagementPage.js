import React, { Component, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useAuth } from "../../hooks/useAuth";
import { ReactComponent as BlueArrow } from "../../blue_arrow.svg";
import { ReactComponent as WhiteArrow } from "../../white_arrow.svg";
import { ReactComponent as PictureProfile } from "../../teacher_pic.svg";
import BurgerButtonMain from "../header/BurgerButtonMain";
import TeacherCard from "./TeacherCard";
import { Link } from "react-router-dom";
import * as axios from "axios";
import SearchInput from "./SearchInput";
import { ReactComponent as ArrowDropdownSort } from "../../arrow_dropdown_sort.svg";

const ManagementPage = (props) => {
  const { teachers, getTeacherProfileThunk, getTeachersSearchThunk } = props;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [dropDown, setDropdown] = useState(false);
  const [currentDropDownItem, setCurrentDropDownItem] =
    useState("Выберите кафедру");

  const itemsPerPage = 6;
  const [forcePage, setForcePage] = useState(null);
  useEffect(() => {
    // props.getTeacherManagementByDepartmentThunk(21);
    props.getFacultyThunk();
    localStorage.removeItem("idSourse");
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(teachers.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(teachers.length / itemsPerPage));
    getTeachersSearchThunk();
    if (teachers.length === 1) {
      setItemOffset(0);
    }
    if (localStorage.getItem("user") !== null) {
      props.getTeacherIconThunk(
        JSON.parse(localStorage.getItem("user")).id_from_source
      );
    }
  }, [itemOffset, itemsPerPage, teachers, dropDown]);

  const handleClickSort = (eId, eName) => {
    setItemOffset(0);
    props.getTeacherManagementByDepartmentThunk(eId);
    setCurrentDropDownItem(eName);
    setForcePage(0);
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % teachers.length;
    setItemOffset(newOffset);
    setForcePage(event.selected);
  };
  const handleClickDropdown = () => {
    dropDown === false ? setDropdown(true) : setDropdown(false);
  };
  const handleClickDropdownPropagation = () => {
    if (dropDown === true) {
      setDropdown(false);
    }
  };

  return (
    <div className="disp">
      <div className="burger_combine">
        <BurgerButtonMain></BurgerButtonMain>
      </div>
      <div
        className="management_page_block"
        onClick={handleClickDropdownPropagation}
      >
        <div className="content_management_page">
          <div className="block_for_button">
            <button
              className="button_my_journal"
              onClick={() => {
                getTeacherProfileThunk(
                  JSON.parse(localStorage.getItem("user")).id_from_source
                );
                document.getElementById("link_myjournal").click();
              }}
            >
              Мои журналы
            </button>
            <Link
              id="link_myjournal"
              className="link_myjournal"
              to="/electronicaljournal-view/teacher_profile"
            >
              Мои журналы
            </Link>
            <SearchInput
              teachersSearch={props.teachersSearch}
              getTeacherManagementByIdThunk={
                props.getTeacherManagementByIdThunk
              }
              getTeacherManagement={props.getTeacherManagement}
            ></SearchInput>
          </div>
          <div className="department_sort_block">
            <p className="teachers_name_for_sort_block">Преподаватели</p>
            <div className="block_select_dropdown_department">
              {/* <button
                type="button"
                className="button_dropdown_department"
                onClick={handleClickDropdown}
              >
                {currentDropDownItem}
              </button> */}
              <div className="disp">
                <label className="label_for_dropdown">Сортировать: </label>
                <div className="upper_div_dropdown_department ">
                  <div
                    className="div_dropdown_department disp"
                    onClick={handleClickDropdown}
                  >
                    {currentDropDownItem !== "Выберите кафедру"
                      ? "Кафедра " + currentDropDownItem
                      : currentDropDownItem}
                    <ArrowDropdownSort
                      className={
                        dropDown === false
                          ? "icon_arrow_dropdown_sort"
                          : "icon_arrow_dropdown_sort rotate_icon_arrow_dropdown_sort"
                      }
                    ></ArrowDropdownSort>
                  </div>
                </div>
              </div>
              <div
                onClick={(e) => e.stopPropagation()}
                className={
                  dropDown === false
                    ? "select_dropdown_department dropdown_close"
                    : "select_dropdown_department dropdown_open"
                }
              >
                <ul className="select_items_department">
                  {props.faculty.map((m) => {
                    return (
                      <li
                        className={
                          currentDropDownItem === m.displayName
                            ? "select_item_department_color"
                            : "select_item_department"
                        }
                        onClick={() =>
                          handleClickSort(m.idFromSource, m.displayName)
                        }
                      >
                        <p className="select_item_department_info">
                          {"Кафедра " + m.displayName}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* <select className="sortByDepartment">
              <option>Кафедра</option>
              <option>Че то там ещё</option>
            </select> */}
          </div>

          <div className="teachers_block">
            <div className="teacher_card_block">
              {currentItems.map((teacher) => {
                return (
                  <div className="teacher_card" key={teacher.id}>
                    {/* <PictureProfile className="teacher_card_picture"></PictureProfile> */}
                    <img
                      alt=""
                      className="teacher_card_picture"
                      src={
                        teacher !== undefined
                          ? "http://192.168.11.252:8008/images/" +
                            teacher.imageName
                          : // +
                            // "?v" +
                            // Math.floor(Math.random() * 10001)
                            "http://192.168.11.252:8008/images/none.jpg"
                        // +
                        // "?v"
                        // +
                        // Math.floor(Math.random() * 10001)
                      }
                    />
                    <TeacherCard
                      teacher={teacher}
                      getTeacherProfileThunk={getTeacherProfileThunk}
                    ></TeacherCard>
                  </div>
                );
              })}
            </div>
            <div className="pagination_block">
              <ReactPaginate
                breakLabel="..."
                nextLabel={
                  <>
                    <BlueArrow className="blue_arrow rotate_arrow_pading"></BlueArrow>
                    <WhiteArrow className="white_arrow rotate_arrow_pading"></WhiteArrow>
                  </>
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel={
                  <>
                    <BlueArrow className="blue_arrow"></BlueArrow>
                    <WhiteArrow className="white_arrow"></WhiteArrow>
                  </>
                }
                forcePage={forcePage}
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
                pageClassName="block_for_page_num"
              />
              <div className="block_with_labels_for_length">
                <label className="label_for_length_name">Всего записей:</label>
                <label className="label_for_length">{teachers.length}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementPage;
