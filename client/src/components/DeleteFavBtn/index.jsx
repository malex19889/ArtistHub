import React from "react";
import "./style.css";
import API from "../../utils/API"
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteFavBtn(props) {

  function handleDeleteFavorite(id) {
    console.log("hey",props)
        API.deleteFavorites(id)
}
  return (
    <button className="delete-btn btn btn-dark" 
    onClick={()=>handleDeleteFavorite(props.id)}>
      Delete
    </button>
  );
}

export default DeleteFavBtn;
