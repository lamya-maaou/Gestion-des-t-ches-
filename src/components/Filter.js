import React from "react";

function Filter({ filter, setFilter }) {
  return (
    <div className="filter">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        Terminées
      </button>
      <button
        className={filter === "active" ? "active" : ""}
        onClick={() => setFilter("active")}
      >
        En cours
      </button>
    </div>
  );
}

export default Filter;
