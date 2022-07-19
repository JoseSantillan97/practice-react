import React from 'react';
import './Card.css';

const Card = ({personaje}) => {
  const { char_id, name, nickname, status, occupation, img } = personaje;

  return(
      <div className="card my-3">
        <img src={img} className="card-img-top" alt={name}/>

        <span className={`btn btn-sm float-end ${
          status.toLowerCase().includes('alive') ? 'btn-success' : 'btn-danger'
        }`}>{status}</span>

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{nickname}.</p>

          <div className="row text-left">
            <p className="text-muted">Occupation</p>
            <hr />
            {occupation.map((item, index) => {
              return(
                <strong key={index}>{item}</strong>
              )
            })}

          </div>
        </div>
      </div>
  );
};


export default Card;
