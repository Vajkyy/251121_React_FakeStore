import React, { useState, useContext } from "react";
import { TermekContext } from "../../contexts/TermekContext";

export default function TermekUrlap() {
  const { postTermek } = useContext(TermekContext);

  const [urlapAdat, setUrlapAdat] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "http://example.com",
  });

  function mezoValt(event) {
    let kulcs = event.target.id;
    let ertek = event.target.value;
    setUrlapAdat({ ...urlapAdat, [kulcs]: ertek });
  }

  function kuldes(event) {
    event.preventDefault();
    postTermek(urlapAdat);
  }

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <form onSubmit={kuldes}>        
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Termék neve</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={urlapAdat.title}
            onChange={mezoValt}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Ár</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={urlapAdat.price}
            onChange={mezoValt}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Leírás</label>
          <textarea
            className="form-control"
            id="description"
            value={urlapAdat.description}
            onChange={mezoValt}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">Kategória</label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={urlapAdat.category}
            onChange={mezoValt}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Kép URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={urlapAdat.image}
            onChange={mezoValt}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Küldés
        </button>
      </form>
    </div>
  );
}
