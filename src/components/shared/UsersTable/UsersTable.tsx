
import { ReactElement, useState } from 'react';
import { TUser } from '@/components/customTypes';
import Button from '../Button/Button';
import AddUser from '../AddUser/AddUser';
import style from './UsersTable.module.css';

interface IProps {
  users: Array<TUser>,
}

const UsersTable = ({users}:IProps):ReactElement => {

  const [search, setSearch] = useState('');


  return(
  <div className={style.container}>

    <div>
      <label htmlFor="name-search">Search the name:</label>
      <input
        className="input"
        id="name-search"
        onChange={(e) => setSearch(e.target.value)} 
        type="text" 
        value={search} 
      />
      <Button
        onClick={()=> setSearch('')}
        type="button"
        variant="search" 
      >
        Clear search
      </Button>
    </div>

    <table className={style.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Banned</th>
          <th>Modify User</th>
        </tr>
      </thead>

      <tbody>
          
        {users
        .filter(item => {
          return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
        })
        .map((user) => {
          return(
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td className={style.button}><button type="button" id={user.id} className={ user.banned ? style.banned : '' } /></td>
              <td><Button variant="basic">Edit</Button></td>
            </tr>
          )}
        )}
              
      </tbody>

    </table>

    <AddUser/>

  </div>
)}

export default UsersTable;
