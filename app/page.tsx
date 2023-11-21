'use client'
import { Metadata } from 'next'
import useAuthentication from '@/hooks/useAuthentication'

export const metadata: Metadata = {
  title: 'Inicio',
}

export default function Home() {
  return (
    <main>
      <h1 className='text-2xl font-bold'>Bienvenidos a la aplicacion react_example</h1>
      <p>El objetivo de la aplicacion es mostrar el uso de React, componentes, App Router y hooks.</p>
      <button className=' botonEliminar' onClick={()=>persistAuthentication({token: 'Hola mundo'})}>Persistir</button>
      
      <button className=' botonEliminar' onClick={()=>console.log(retrieveAuthentication())}>Traer</button>
      
      <button className=' botonEliminar' onClick={()=>deleteAuthentication()}>Eliminar</button>
    </main>
  )
}
