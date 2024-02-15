import React, { useState } from "react";

const TeacherPhoto = (props) => {
  const [key, setKey] = useState(0);
  const [url, setUrl] = useState(null);

  const handleFileSelect = (event) => {
    setKey(key + 1);
    var formData = new FormData();
    const files = event.target.files;
    formData.append("file", files[0]);

    if (formData !== null) {
      props.setProfileImageThunk(
        props.teacherProf.surname +
          props.teacherProf.idFromSource +
          files[0].name.slice(files[0].name.length - 4),
        formData,
        JSON.parse(localStorage.getItem("user")).id_from_source
      );
      console.log(files);
    }

    if (files[0].size < 130000) {
      var reader = new FileReader();
      reader.onloadend = () => {
        setUrl(reader.result);
      };
      if (files) {
        reader.readAsDataURL(files[0]);
      }
    }
    event.target.value = null;
  };
  return (
    <>
      <div className="teacher_photo">
        <img
          key={key}
          alt="teacher_photo"
          className="teacher_photo_img"
          src={
            url !== null
              ? url
              : props.teacherProf !== undefined
              ? "/images/" + props.teacherProf.imageName
              : // +
                // "?v" +
                // Math.floor(Math.random() * 10001)
                "/images/none.jpg"
            // ?v
            // +
            //   Math.floor(Math.random() * 10001)
          }
          onError={({ currentTarget }) => {
            // currentTarget.src = "/images/none.jpg";
            // ?v
            // +
            // Math.floor(Math.random() * 10001);
          }}
        />
        {console.log(url)}
        <button
          className="teacher_photo_button"
          onClick={() => {
            document.getElementById("file").click();
          }}
          disabled={
            localStorage.getItem("idSourse") === null ||
            localStorage.getItem("idSourse") ===
              JSON.parse(localStorage.getItem("user")).id_from_source.toString()
              ? false
              : true
          }
        >
          Редактировать
        </button>
        <input
          className="input_for_photo_select"
          type="file"
          id="file"
          name="file"
          accept=".jpg, .png"
          onChange={handleFileSelect}
        />
      </div>
    </>
  );
};

export default TeacherPhoto;
