import React from "react";
import "./style.css";
import API from "../../utils/API"

function DeleteMerchBtn(props) {

  function handleDeleteMerch(id) {
    console.log("delete merch: ", props)
    API.deleteMerch(id)
    window.location.reload();
  }
  return (
    <button className="delete-btn btn btn-dark"
      onClick={() => handleDeleteMerch(props.id)}>
      Delete
    </button>
  );
}

export default DeleteMerchBtn;
