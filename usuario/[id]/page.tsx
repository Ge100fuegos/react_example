'use client'
import customAxios from '@/utils/customAxios';
import { isAxiosError } from 'axios';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'

interface IUserEditProperties {
  params: {
    id: string;
  }
}

interface ICreateUsuarioResponse {
  message: string;
}

interface IUsuarioEntity {
  id: number;
  nombre: string;
  edad: number;
}

interface IUpdateUsuarioResponse {
  message: string;
  data: IUsuarioEntity;
}

const UserEdit = ({params: {id}}:IUserEditProperties) => {

  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState(0)

  const getUsuario = useCallback( async () => {
    try {
      const response = await customAxios.get<IUsuarioEntity>(`/usuario/${id}`);
      console.log('Users:', response.data)

      setNombre(response.data.nombre);
      setEdad(response.data.edad)
    } catch (error) {
      if(isAxiosError(error)){
        console.log('Axios Error', error)
      }else{
        console.log('Another Error', error)
      }
    }
  }, [id])

  useEffect(() => {
    getUsuario()
  }, [getUsuario])

  const handleNombreOnChange = (event:ChangeEvent<HTMLInputElement>) => setNombre(event.currentTarget.value);
  
  const handleEdadOnChange = (event:ChangeEvent<HTMLInputElement>) => setEdad(Number(event.currentTarget.value));

  const updateUsuario = async () => {
    if(confirm('Do you want to update users data?')){
      try {
        const response = await customAxios.put<IUpdateUsuarioResponse>(`/usuario/${id}`, {
          nombre,
          edad
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });
        console.log('Message:', response.data.message)
  
        console.log('Data:', response.data.data)
  
        alert('the data was modified successfully.')
      } catch (error) {
        if(isAxiosError(error)){
          console.log('Axios Error', error)
        }else{
          console.log('Another Error', error)
        }
      }
    }
  }

  return (
    <div>
      <div className='flex flex-col'>
        <label htmlFor="firstName">Name:</label>
        <input onChange={handleNombreOnChange} id='firstName' type="text" value={nombre} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="firstName">Age:</label>
        <input onChange={handleEdadOnChange} id='firstName' type="number" value={edad} />
      </div>
      <button onClick={updateUsuario}>Edit</button>
    </div>
  )
}

export default UserEdit