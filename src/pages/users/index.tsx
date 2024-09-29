import { ReactElement, useEffect, useState } from 'react';
import ErrorPage from '@/components/pages/ErrorPage';
import { UsersTable } from '@/components/shared';

const Users = ():ReactElement => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch('https://inqool-interview-api.vercel.app/api/users')
      .then((response) => {

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      })
      .then((resData) => {
        setUsers(resData);
      })
      .catch(error => {
        return <ErrorPage title='Sorry, error when loading the users' message={error} />  
      })
      .finally(() => setLoading(false))

  }, []);
  
  if (loading) return <p>Data Loading...</p>

  return <UsersTable users={users} />

};
  
export default Users;
