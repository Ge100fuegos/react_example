import React from 'react';
import react, {useState} from 'react'; 


interface Bicicleta {
  posicion: number;
  titulo: string;
  imagen: string;
  descripcion: string;
}

const TopBicicletas = () => {
  const [bicicletas, setBicicletas]= useState<Bicicleta[]>([
    
    {
        posicion: 1,
        titulo: 'Cervelo R5',
        imagen: 'https://solobici.es/wp-content/uploads/2023/06/Strade-Bianche-fiets_2023-05-12-092833_povl.webp',
        descripcion: 'Equipada con grupo de transmisión y frenos de SRAM, con la tan comentada transmisión monoplato que han probado en competición esta temporada.',
      },
      {
        posicion: 2,
        titulo: 'Colnago V4Rs',
        imagen: 'https://solobici.es/wp-content/uploads/2023/06/COLNAGO-V4Rs-TEAM-MAN-2023-fondobianco-laterale-scaled-e1687960684719-1536x802.webp',
        descripcion: 'Equipada con el Dura-Ace de gama alta de Shimano. Este modelo ya se utilizó el año pasado con el nombre de Prototipo',
      },
      {
        posicion: 3,
        titulo: 'Specialized S-Works Tarmac SL7',
        imagen: 'https://solobici.es/wp-content/uploads/2023/06/Bora_Hansgrohe_2022_Foto_Team_F8_druck_801236_de8e6f799e.jpg',
        descripcion: 'La famosa superventas de Specialized estará equipada con grupo Shimano y ruedas y periféricos Roval.',
      },
  
  ]);
    

const styles = {
  top3Container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  bicicletaItem: {
    border: '1px solid #ccc',
    padding: '20px',
    textAlign: 'center',
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr auto', 
  },
  posicion: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: '1.2rem',
    margin: '10px 0',
  },
  imagen: {
    maxWidth: '100%',
    height: 'auto',
  },
  descripcion: {
    fontSize: '1rem',
  },

  
};

 return (
  <div className="grid grid-cols-3 gap-4">
  {bicicletas.map((bicicleta) => (
    <div key={bicicleta.posicion} className={`p-4 ${bicicleta.posicion === 1 ? 'col-span-3' : ''}`}>
      <div className="text-2xl font-bold mb-2">#{bicicleta.posicion}</div>
      <div className="text-lg font-semibold mb-2">{bicicleta.titulo}</div>
      <img src={bicicleta.imagen} alt={bicicleta.titulo} className="w-full h-32 object-cover mb-2" />
      <p className="text-gray-600">{bicicleta.descripcion}</p>
    </div>
  ))}
</div>
  );
}; 

export default TopBicicletas;
