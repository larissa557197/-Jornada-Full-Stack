import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


// Recebe props
// cria um Link para uma rota dinâmica -> idPath/${id}
// exibe uma imageme um ícone de play
// se o nome do artista não for passado, exibe "Artista"

const SingleItem = ({ id, name, image, banner, artist, idPath }) => {
  return (
    // Link para a página do item com base no id
    <Link to={`${idPath}/${id}`} className="single-item">
      <div className="single-item__div-image-button">
        {/* div para a imagem do item */}
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Imagem do Artista ${name}`}
          />
        </div>

        {/* ícone de play sobre a imagem */}
        <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
      </div>

        {/* informações do item */}
      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
        </div>

        {/* exibe o nome do artista ou 'Artista' caso não seja passado*/}
        <p className="single-item__type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
};

export default SingleItem;
