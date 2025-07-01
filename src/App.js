import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
   const [users, setUsers] = React.useState([]);
   const [isLoading, setLoadin] = React.useState(true);

   React.useEffect(() => {
      fetch('https://reqres.in/api/users2')
         // fetch('https://reqres.in/api/users', {
         //    headers: { 'x-api-key': 'reqres-free-v1' },
         // })
         .then((res) => res.json())
         .then((json) => {
            setUsers(json.data);
         })
         .catch((err) => {
            console.warn(err);
            alert('Ошибка при получении пользователей');
         });
   }, []);

   return (
      <div className="App">
         <Users items={users} />
         {/* <Success /> */}
      </div>
   );
}

export default App;
