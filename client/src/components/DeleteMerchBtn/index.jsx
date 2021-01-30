import React from "react";
import "./style.css";
import API from "../../utils/API"
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteMerchBtn(props) {

  function handleDeleteMerch(id) {
    console.log("delete merch: ",props)
        API.deleteMerch(id)
}
  return (
    <button className="delete-btn btn btn-dark" 
    onClick={()=>handleDeleteMerch(props.id)}>
      Delete
    </button>
  );
}

export default DeleteMerchBtn;
