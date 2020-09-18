import React from 'react'

export default function News() {
  return (
    <div className='px-48 w-full'>
      <div>
        <h1 className='pt-20 text-5xl font-semibold'>Descubra</h1>
        <div className='w-full flex items-center py-6'>
          <div className='cursor-pointer hover:text-danger-500'>
            <img
              src='https://files.porsche.com/filestore/image/multimedia/none/rd-2017-homepage-teaser-porscheexclusivemanufaktur-kw24/normal/3cbd9b47-4c59-11e7-bfe2-0019999cd470;sK;twebp/porsche-normal.webp'
              alt=''
              className=''
            />
            <p className='font-thin tracking-wide text-base py-1'>
              <i className='fas fa-chevron-right px-1 text-danger-500' /> Porsche Exclusive Manufaktur.
            </p>
          </div>
          <div className='hover:text-danger-500 cursor-pointer'>
            <img
              src='https://files.porsche.com/filestore/image/multimedia/none/teaser-ww-rediantpower-kw25/normal/9f09e518-33cc-11e6-9225-0019999cd470;sK;twebp/porsche-normal.webp'
              alt=''
            />
            <p className='font-thin tracking-wide text-base py-1'>
              <i className='fas fa-chevron-right px-1 text-danger-500' /> Radiant Power.
            </p>
          </div>
          <div className='hover:text-danger-500 cursor-pointer'>
            <img
              src='https://files.porsche.com/filestore/image/multimedia/none/rd-2017-homepage-teaser-ww-tequipmentsound-design-kw27/normal/e19a7537-5cd4-11e7-9717-0019999cd470;sK;twebp/porsche-normal.webp'
              alt=''
            />
            <p className='font-thin tracking-wide text-base py-1'>
              <i className='fas fa-chevron-right px-2 text-danger-500' /> Tequipment Sound & Design.
            </p>
          </div>
          <div className='hover:text-danger-500 cursor-pointer'>
            <img
              src='https://files.porsche.com/filestore/image/multimedia/none/rd-2018-homepage-teaser-ww-e-performance-kw12/normal/f7cc8e7c-6599-11e9-80c4-005056bbdc38;sK;twebp/porsche-normal.webp'
              alt=''
            />
            <p className='font-thin tracking-wide text-base py-1'>
              <i className='fas fa-chevron-right px-2 text-danger-500' /> Porsche E-Performace.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
