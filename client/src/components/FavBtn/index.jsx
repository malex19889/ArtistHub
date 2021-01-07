import React from "react";

function FavBtn(props) {

  return (
    <button style={{ marginTop: "10px" }} className="save-btn btn btn-dark" tabIndex="0"
      onClick={() => props.handleFavorite(props.band)}>
      Add Band to Favorites
    </button>
  );
}

export default FavBtn;