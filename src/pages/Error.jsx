import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Error() {
  return (
    <div>
      <div className="error container">
        <Header />
        <div className="error__content">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <a href="/">Retourner sur la page d’accueil</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Error