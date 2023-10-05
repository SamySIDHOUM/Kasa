import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/_error.scss'

export default function Error() {
  return (
    <div>
      <div className="error-container">
        <div className="content">
          <h1>404</h1>
          <p>Oups! La page que <br/>vous demandez n'existe pas.</p>
          <Link to="/" className="back-home">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </div>
    </div>
  )
  }