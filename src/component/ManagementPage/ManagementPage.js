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
const ManagementPage = (props) => {
  const { user } = useAuth();

  const { teachers, getTeacherProfileThunk, getTeacherManagement } = props;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;

  useEffect(() => {
    localStorage.removeItem("idSourse");
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(teachers.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(teachers.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, teachers]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % teachers.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="disp">
      <div className="burger_combine">
        <BurgerButtonMain></BurgerButtonMain>
      </div>
      <div className="management_page_block">
        <div className="block_for_button">
          <button
            className="button_my_journal"
            onClick={() => {
              getTeacherProfileThunk(
                JSON.parse(localStorage.getItem("user")).id_from_source
              );
              window.location.assign(
                `/electronicaljournal-view/teacher_profile`
              );
            }}
          >
            Мои журналы
          </button>
          {/* <Link
            onClick={() => {
              getTeacherProfileThunk(
                JSON.parse(localStorage.getItem("user")).id_from_source
              );
            }}
            className="button_my_journal"
            to="/electronicaljournal-view/teacher_profile"
          >
            Мои журналы
          </Link> */}
        </div>
        <div className="department_sort_block">
          <p className="teachers_name_for_sort_block">Преподаватели</p>
        </div>

        <div className="teachers_block">
          <div className="teacher_card_block">
            {currentItems.map((teacher) => {
              return (
                <div className="teacher_card" key={teacher.id}>
                  {/* <PictureProfile className="teacher_card_picture"></PictureProfile> */}
                  <img
                    className="teacher_card_picture"
                    src={
                      teacher !== undefined
                        ? "http://192.168.11.252:8008/images/" +
                          teacher.imageName
                        : "http://192.168.11.252:8008/images/none.jpg"
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
  );
};

export default ManagementPage;
