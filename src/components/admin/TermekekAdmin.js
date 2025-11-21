import React, { useContext } from "react";
import TermekekSorAdmin from "./TermekekSorAdmin";
import { TermekContext } from "../../contexts/TermekContext";

export default function TermekekAdmin() {
  const { termekLista } = useContext(TermekContext);
  console.log(termekLista);
  return (
    <div className={"table-responsive"}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id:</th>
            <th>Név:</th>
            <th>Ár:</th>
            <th>Leírás:</th>
            <th>Kategória:</th>
            <th>Kép:</th>
          </tr>
        </thead>
        <tbody>
          {termekLista.map((termek) => {
            return <TermekekSorAdmin termek={termek} key={termek.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
