'use client';
import React, { ChangeEvent, useState } from 'react'
import { Metadata } from 'next';
import { IUsuario } from '@/components/UserCard';


type TRoles = 'Client' | 'Admin';

interface User extends IUsuario{
  id: number,
  terms: boolean,
  picture: string

}

const Example2 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState<TRoles>('Client');
  const [terms, setTerms] = useState(false);
  const [picture, setPicture] = useState(''); //Estado que se usa para la ruta de la picturen
  const [users, setUsers] = useState<User[]>([]);

  const handleNameOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value);
  };

  const handleLastNameOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.currentTarget.value);
  };

  const handleRoleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.currentTarget.value === 'Client' || event.currentTarget.value === 'Admin') {
      setRole(event.currentTarget.value);
    }
  };

  const handleTermsOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerms(event.currentTarget.checked);
  };

  const handlepictureOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPicture(event.currentTarget.value);
  };

  const handleGuardarOnClick = () => {
    const newUser: User = {
      id: users.length + 1, 
      firstName,
      lastName,
      role,
      terms,
      picture,
    };

    setUsers([...users, newUser]);

    console.log('--------------');
    console.log('Nombre:', firstName);
    console.log('Apellido:', lastName);
    console.log('Rol:', role);
    console.log(terms ? 'Acepto los términos' : 'No acepto los términos');
    console.log('picture:', picture);
    console.log('--------------');
  };

  return (
    <div>
      <h1 className='text-2xl font-bold'>Capturar datos</h1>
      <div className='flex flex-col'>
        <label htmlFor='firstName'>Nombre:</label>
        <input onChange={handleNameOnChange} id='firstName' type='text' value={firstName} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='lastName'>Apellido:</label>
        <input onChange={handleLastNameOnChange} id='lastName' type='text' value={lastName} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='rol'>Rol:</label>
        <select onChange={handleRoleOnChange} id='rol' value={role}>
          <option value='Client'>Cliente</option>
          <option value='Admin'>Administrador</option>
        </select>
      </div>
      <div className='flex flex-col'>
        <label htmlFor='picture'>picture (URL):</label>
        <input onChange={handlepictureOnChange} id='picture' type='text' value={picture} />
      </div>
      <div className='flex flex-row gap-1 items-center'>
        <label htmlFor='terms'>Aceptar términos y servicios</label>
        <input onChange={handleTermsOnChange} id='terms' type='checkbox' checked={terms} />
      </div>
      <button onClick={handleGuardarOnClick}>Guardar</button>

      <div>
        <h2>Listado de Usuarios:</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName} - Rol: {user.role} - picture: {user.picture}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Example2;
