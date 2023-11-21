'use client'
import customAxios from '@/utils/customAxios';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'

interface ILoginResponse {
  token: string;
}

interface ILoginBody {
  username: string;
  password: string;
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

const UsuariosPage = () => {
  const router = useRouter();

  const [users, setUsers] = useState<IUsuarioEntity[]>([])

  const getAllUsuarios = useCallback( async () => {
    try {
      const response = await customAxios.get<IUsuarioEntity[]>('/usuario');
      console.log('Users:', response.data)
      setUsers(response.data)
    } catch (error) {
      if(isAxiosError(error)){
        console.log('Axios Error', error)
      }else{
        console.log('Another erro', error)
      }
    }
  }, [])

  useEffect(() => {
    getAllUsuarios()
  }, [getAllUsuarios])

  const deleteUsuario = async (id: number) => {
    try {
      await customAxios.delete<IUpdateUsuarioResponse>(`/usuario/${id}`);
      
      getAllUsuarios();
    } catch (error) {
      if(isAxiosError(error)){
        console.log('Axios Error', error)
      }else{
        console.log('Another Error', error)
      }
    }
  }
  
  return (
    <div>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user) => {
          const editar = () => {
            router.push(`/usuarios/${user.id}`)
          }

          const eliminar = () => {
            if(confirm('Do you want deleting the user?')){
              deleteUsuario(user.id)
            }
          }

          return (<tr key={user.id}>
            <td>{user.nombre}</td>
            <td>{user.edad}</td>
            <td className='flex flex-row gap-2'>
              <button onClick={editar}>Edit</button>
              
              <button onClick={eliminar}>Delete</button>
            </td>
          </tr>)
        })}       
          
        </tbody>
      </table>
    </div>
  )
}

export default UsuariosPage