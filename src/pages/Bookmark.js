import React from "react";

const Bookmark = () => {
  let items = localStorage.getItem("bookmarkPk");

  console.log(items);

  return (
    <div>
      <button onClick={() => localStorage.clear()}>Clr</button>
    </div>
  );
};

export default Bookmark;
