import React, { useState } from 'react';
import './App.css';
import WelcomeCard from './components/WelcomeCard';


function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [edad, setEdad] = useState('');
  const [showWelcomeCard, setShowWelcomeCard] = useState(false);

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeEdad = (e) => setEdad(e.target.value);

  const validateUserName = (userName) => {
    const withoutSpaces = userName.trim();

    if (withoutSpaces.length > 3) {
      return true;
    } else {
      return false;
    }
  };

  const validatePassword = (password) => {
    const withoutSpaces = password.trim();
    const passwordAsArray = withoutSpaces.split("");
    
    if (withoutSpaces.length > 5 ) {
      return true;
    } else {
      return false;
    }
  };

  const validateEdad = (edad) => {
    if (edad === '' || isNaN(edad) || edad <= 0 || !Number.isInteger(+edad)) {
      return false;
    } else {
      return true;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const isUsernameValid = validateUserName(userName);
    const isPasswordValid = validatePassword(password);
    const isEdadValid = validateEdad(edad);

    if (!isPasswordValid || !isUsernameValid || !isEdadValid) {
      alert("Por favor chequea que la información sea correcta.");
    } else {
      setShowWelcomeCard(true);
    }
  };

  return (
    <div className="App">
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          value={userName}
          onChange={onChangeUserName}
        />
        <input
         
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}

        />
        <input
           type="text"
           placeholder="Edad"
           value={edad}
           onChange={onChangeEdad}
        />
        <button type="submit">Enviar</button>
      </form>
      {showWelcomeCard && <WelcomeCard userName={userName}  edad={edad}/>}
    </div>
  );
}
export default App;

