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
    <button className="delete-btn btn btn-dark" style={{height:"40px", marginTop:"10px", marginRight:"10px", float:"left"}}
      onClick={() => handleDeleteTourDate(props.id)}>
      Delete
    </button>
  );
}

export default DeleteTourBtn;
