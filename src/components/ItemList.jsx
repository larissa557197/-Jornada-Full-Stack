import React from "react";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

// o componente recebe props
// renderiza um tpitulo e um link para exibir itens
// os itens são filtrados para exibir apenas uma quantidade limitada
// O .map() percorre o itemsArrray, passando propridade para SingleItem

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  // console.log(items);

  // Lista de itens
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <Link to={path} className="item-list__link">
          Mostrar tudo
        </Link>
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currObj, index) => (
            <SingleItem
              // id={currObj.id}
              // name={currObj.name}
              // image={currObj.image}
              // banner={currObj.banner}
              idPath={idPath}
              {...currObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;