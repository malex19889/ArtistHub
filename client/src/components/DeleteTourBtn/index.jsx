import React from "react";
import "./style.css";
import API from "../../utils/API"

function DeleteTourBtn(props) {

  function handleDeleteTourDate(id) {
    console.log("delete tour: ", props)
    API.deleteTourDate(id)
    window.location.reload();
  }

  return (
    <button className="delete-btn btn btn-dark"
      onClick={() => handleDeleteTourDate(props.id)}>
      Delete
    </button>
  );
}

export default DeleteTourBtn;
