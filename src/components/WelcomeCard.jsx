

import React from 'react';

function WelcomeCard({ userName ,color}) {
  return (
    <div className="welcome-card">
      <h2>Bienvenido, {userName}!</h2>
      <h2>Tu color favorito es:, {(color)}!</h2>
      <p>¡Gracias por unirte a nuestra comunidad!</p>
    </div>
  );
}

export default WelcomeCard;