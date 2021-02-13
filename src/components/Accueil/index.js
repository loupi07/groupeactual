import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Accueil = (props) => {
  const [user, setUser] = useState(null);

  const getAge = (date) => {
    var birthday = moment(date);
    var today = moment().format('YYYY-MM-DD');

    if (birthday.isSame(today)) {
      return '0';
    } else {
      return Math.abs(birthday.diff(today, 'days'));
    }
  };

  useEffect(() => {
    /*axios
      .get('https://reqres.in/api/users/1')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));*/

    setUser(props?.history?.location?.state?.user);
  }, []);
  return (
    <div>
      {user && (
        <>
          Bonjour {user.name} votre anniversaire est dans {getAge(user.date)}{' '}
          jours. Si cela est incorrect, vous pouvez modifier les informations
          sur votre page
          <Link to="/informations"> informations</Link>
        </>
      )}
      {!user && (
        <>
          Veuillez vous enregistrer sur la page{' '}
          <Link to="/informations"> informations</Link>
        </>
      )}
    </div>
  );
};

export default Accueil;
