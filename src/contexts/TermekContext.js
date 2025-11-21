import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const TermekContext = createContext("");

export const TermekProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);

  function postTermek(adat) {
    axios
      .post("https://fakestoreapi.com/products", {
        id: adat.id,
        title: adat.title,
        price: adat.price,
        description: adat.description,
        category: adat.category,
        image: adat.image,
      })
      .then(function (response) {
        console.log(response.data);

        setTermekLista((prevLista) => [...prevLista, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function deleteTermekek(adat) {
    axios
      .delete("https://fakestoreapi.com/products/" + adat.id)
      .then(function (response) {
        console.log(response);
        setTermekLista((prevLista) =>
          prevLista.filter((termek) => termek.id !== adat.id)
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getTermekek() {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setTermekLista(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  /* asszinkron működések esetén használjuk, és beállíthatjuk a függőségeket a 
  második paraméterben, ettől a paramétertől függ, hogy mikor futtatja le a benne lévő függvényt */
  useEffect(() => {
    getTermekek();
  }, []);

  return (
    <TermekContext.Provider value={{ termekLista, deleteTermekek, postTermek }}>
      {children}
    </TermekContext.Provider>
  );
};
