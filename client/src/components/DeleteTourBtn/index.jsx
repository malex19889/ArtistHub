import React from "react";
import "./style.css";
import API from "../../utils/API"
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteTourBtn(props) {

  function handleDeleteTourDate(id) {
    console.log("delete tour: ",props)
        API.deleteTourDate(id)
}
  return (
    <button className="delete-btn btn btn-dark" 
    onClick={()=>handleDeleteTourDate(props.id)}>
      Delete
    </button>
  );
}

export default DeleteTourBtn;
