import React from "react";

export default function Header() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <img
        src="https://files.porsche.com/filestore/image/multimedia/none/875d5e3d-6763-47fe-bc52-809142d53274/svg/9bee0427-35f0-11ea-80c6-005056bbdc38/porsche-svg.svg"
        alt="porsche logo"
        className='w-1/12 py-2'
      />
      <div className='flex justify-start px-20  w-full'>
        <p className='text-sm cursor-pointer hover:text-danger-400 px-4 border-r border-solid border-black'>Modelos</p>
        <p className='text-sm cursor-pointer hover:text-danger-400 px-4'>Veículos Seminovos</p>
        <p className='text-sm cursor-pointer hover:text-danger-400 px-4'>Eventos esportivos</p>
        <p className='text-sm cursor-pointer hover:text-danger-400 px-4'>Serviços & Acessórios</p>
        <p className='text-sm cursor-pointer hover:text-danger-400 px-4'>Empresa</p>
      </div>
    </div>
  );
}
