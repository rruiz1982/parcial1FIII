import React, { useState } from 'react';
import './App.css';
import WelcomeCard from './components/WelcomeCard';

function App() {
  const [userName, setUserName] = useState('');
  const [color, setColor] = useState('');
  const [showWelcomeCard, setShowWelcomeCard] = useState(false);

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeColor = (e) => setColor(e.target.value);

  const validateUserName = (userName) => {
    const withoutSpaces = userName.trim();
    return withoutSpaces.length > 5;
  };

  const validateColor = (color) => {
    const withoutSpaces = color.trim();
    return withoutSpaces.length > 3;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const isUserNameValid = validateUserName(userName);
    const isColorValid = validateColor(color);

    if (!isColorValid || !isUserNameValid) {
      alert('Por favor, verifica que la información sea correcta.');
    } else {
      setShowWelcomeCard(true);
    }
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Color Favorito "
          value={color}
          onChange={onChangeColor}
        />
        <input
          type="text"
          placeholder="Nombre y Apellido"
          value={userName}
          onChange={onChangeUserName}
        />
        <button type="submit">Enviar</button>
      </form>
      {showWelcomeCard && <WelcomeCard userName={userName} color={color} />}
    </div>
  );
}

export default App;
