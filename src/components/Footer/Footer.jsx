import React from 'react'

export default function Footer() {
  return (
    <div className='px-48 py-20'>
      <div className='pt-6 border-t border-solid border-gray-500'>
        <div className='flex justify-between w-8/12'>
          <div className=''>
            <h1 className='text-lg font-medium'>Serviços Online</h1>
            <p className='py-3 cursor-pointer hover:text-danger-500'> Porsche Club</p>
          </div>
          <div className=''>
            <h1 className='text-lg font-medium'>Nos bastidores</h1>
            <p className='py-3  cursor-pointer hover:text-danger-500'>Eventos esportivos</p>
            <p className='py-3  cursor-pointer hover:text-danger-500'>Porsche Classic</p>
            <p className='py-3  cursor-pointer hover:text-danger-500'>Visitar o Museu da Porsche</p>
            <p className='py-3  cursor-pointer hover:text-danger-500'>Recall Information</p>
          </div>
          <div className='w-1/4'>
            <h1 className='text-lg font-medium'>Ligue-se à Porsche</h1>
            <p className='py-3 cursor-pointer hover:text-danger-500'>De Relance</p>
            <p className='py-3 cursor-pointer hover:text-danger-500'>Empregos & Carreira</p>
            <div className='w-full'>
              <h2 className='bg-danger-400 w-full py-3 px-2'> Partilhar Página</h2>
            </div>
            <div>
              <h3>Conect-se com a Porsche</h3>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
