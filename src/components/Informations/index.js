import React, { useState } from 'react';
import Input from '../Input';
import axios from 'axios';
import './style.css';
import { withRouter } from 'react-router-dom';
const Informations = (props) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const sendData = () => {
    if (name !== '' && date !== '') {
      axios
        .post('https://reqres.in/api/users', { name, date })
        .then((res) => {
          props.history.push({ pathname: '/', state: { user: res.data } });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="Informations">
      <Input
        label="Prénom"
        type="text"
        input={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Anniversaire"
        type="date"
        input={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={() => sendData()}>mettre a jour le profil</button>
    </div>
  );
};

export default withRouter(Informations);
