'use client'
import useAuthentication from '@/hooks/useAuthentication';
import { Routes } from '@/utils/constants';
import axios, { isAxiosError } from 'axios'
import React, { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

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
  name: string;
  age: number;
}

interface IUpdateUsuarioResponse {
  message: string;
  data: IUsuarioEntity;
}

const LoginPage = () => {
  const {persistAuthentication} = useAuthentication()

  const router = useRouter()

  const [loading, setloading] = useState(0);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event:ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }

  const handlePasswordChange = (event:ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }

  const login = async () => {
    try {
      setloading(previousLoading => previousLoading+1);
      const response = await axios.post<ILoginResponse>('http://localhost:4000/login', {
        username: email,
        password: password
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      persistAuthentication({token: response.data.token})

      console.log('Successful login.')

      router.push(Routes.HOME);
    } catch (error) {
      if(isAxiosError(error)){
        console.log('Axios error', error);
        alert(error);
      }else{
        console.log('Another type of error', error);
      }
    }
    setloading(previousLoading => previousLoading-1);
  }

  return (
    <div>
      <h1>Loading: {loading > 0 ? 'Yes' : 'No'}</h1>
      <div className='flex flex-col'>
        <label htmlFor="firstName">Email:</label>
        <input onChange={handleEmailChange} id='firstName' type="text" value={email} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="firstName">Password:</label>
        <input onChange={handlePasswordChange} id='firstName' type="password" value={password} />
      </div>
      <button onClick={login}>Log in</button>
    </div>
  )
}

export default LoginPage