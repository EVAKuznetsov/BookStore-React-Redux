import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () =>{
    return(
        <div className="error jumbotron">
            <h1 className="error__title">ОЙ!!!</h1>
            <p className="error__text">Что-то пошло не так. Приносим наши извинения. Проблема скоро решится, наверное (o_-)</p>
        </div>
            
    );
}
export default ErrorIndicator;

