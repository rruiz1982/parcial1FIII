

import React from 'react';

function WelcomeCard({ userName ,edad}) {
  return (
    <div className="welcome-card">
      <h2>Bienvenido, {userName}!</h2>
      <h2>Tu edad es:, {(edad)}!</h2>
      <p>¡Gracias por unirte a nuestra comunidad!</p>
    </div>
  );
}

export default WelcomeCard;