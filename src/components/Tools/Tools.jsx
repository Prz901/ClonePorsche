import React from "react";

export default function Tools() {
  return (
    <div className="md:min-w-full lg:min-w-full xl:min-w-full">
      <h1 className="px-20 py-6 text-4xl font-semibold">Shopping Tools</h1>
      <div className="px-20 py-2 ">
        <div className='flex items-center'>
          <div className="relative w-full cursor-pointer hover:text-danger-400">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-shoppingtools-compare/normal/4365f64f-2c10-11e7-9f74-0019999cd470;sO;twebp/porsche-normal.webp"
              alt="shopping tools"
              className="w-full image-repair"
            />
            <div className="absolute top-85  px-4 ">
              <p className='text-white hover:text-danger-400'>
                <i className="fas fa-chevron-right px-2 text-danger-500" />
                Compare
              </p>
            </div>
          </div>
          <div className="relative w-full cursor-pointer">
            <img
              src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-shoppingtools-dealersearch/normal/c365840c-687b-11e7-9717-0019999cd470;sR;twebp/porsche-normal.webp"
              alt="repair"
              className="image-repair"
            />
            <div className="absolute top-85 px-4">
              <p className='text-white'>
                <i className="fas fa-chevron-right px-2 text-danger-500" />
                Locate a dealer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
