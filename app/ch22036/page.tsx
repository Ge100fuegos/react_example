import Image from 'next/image'
import React from 'react'
import OrbeaImage from '@/public/image.jpg';

const Page = () => {
  return (
    <div>
      <div className='grid grid-cols-5 grid-rows-5'>
        <div className=' bg-red-500 p-10 row-span-5 col-span-3'>
          <h1>Numero 1</h1>
          <h2>Bicicleta Orbea Alma m10</h2>
          <Image src={OrbeaImage} alt={'Image of Orbea Alma M10'}/>
          <p>Las mejoras en el rendimiento están por todas partes y la obsesión es parte del juego. Además... ¿dónde está? Una vez que tuvimos metas, competencia y espíritu creativo, nos esforzamos por ganar.</p>
        </div>
        <div className=' bg-blue-500 p-10 row-span-3 col-span-2'>Numero 2</div>
        <div className=' bg-green-400 p-10 row-span-2 col-span-2'>Numero 3</div>
      </div>
    </div>
  )
}

export default Page