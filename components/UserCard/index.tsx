import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export interface IUsuario {
  id: number;
  firstName: string;
  lastName: string;
  picture: string;
  role: 'Admin' | 'Client';
}

const UserCard: React.FC<IUsuario> = ({ id, firstName, lastName, role, picture }) => {
  return (
    <div key={id} className='flex flex-row gap-4 border border-gray-300 rounded-lg overflow-hidden w-96'>
      <div className='aspect-square w-32'>
        <Image width={128} height={128} className='object-cover w-full h-full' src={picture} alt={`User photo of ${firstName} ${lastName}`} />
      </div>
      <div className='flex flex-col justify-center'>
        <span><span className='font-bold'>Nombre:</span> {firstName}</span>
        <span><span className='font-bold'>Apellido:</span> {lastName}</span>
        <span><span className='font-bold'>Rol:</span> {role}</span>
      </div>
    </div>
  );
};

export default UserCard;
