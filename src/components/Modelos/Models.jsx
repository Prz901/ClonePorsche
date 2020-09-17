import React from "react";

export default function Models() {
  return (
    <div className="md:min-w-full xl:min-w-full">
      <h1 className="px-20 py-4 text-4xl font-semibold">Models</h1>
      <div className="flex flex-row items-center w-full ">
        <div className="relative w-1/3">
          <img
            src="https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-718/small/ccc805c0-6693-11e9-80c4-005056bbdc38;sQ;twebp;c1693;gc/porsche-small.webp"
            alt="718"
            className="xl:min-w-full image"
          />
          <div className="absolute top-0 py-4 px-6">
            <h2 className="text-white text-5xl font-light">718</h2>
          </div>
          <div className="absolute bottom-0 flex py-6 px-6 w-full items-center">
            <div className="bg-white mr-4 w-5/12 flex items-center">
              <p className="text-black p-4 ">
                <i className="fas fa-location-arrow px-2" />
                configurar
              </p>
            </div>
            <div className=" border border-solid border-white  w-1/3 hover:border-danger-400 cursor-pointer">
              <p className="text-white p-4 hover:text-danger-400">
                <i className="fas fa-chevron-right px-2" />
                Ver tudo
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-1/3">
          <img
            src="https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-911/small/3cf76e8c-6694-11e9-80c4-005056bbdc38;sQ;twebp;c1693;gc/porsche-small.webp"
            alt="911"
            className="xl:min-w-full image"
          />
          <div className="absolute top-0 py-4 px-6">
            <h2 className="text-white text-5xl font-light">911</h2>
          </div>
          <div className="absolute bottom-0 flex py-6 px-6 w-full items-center">
            <div className=" border border-solid border-white  w-1/3 hover:border-danger-400 cursor-pointer">
              <p className="text-white p-4 hover:text-danger-400">
                <i className="fas fa-chevron-right px-2" />
                Ver tudo
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-1/3">
          <img
            src="https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-taycan/small/094d1c1c-bab0-11e9-80c4-005056bbdc38;sQ;twebp;c1693;gc/porsche-small.webp"
            alt="Taycan"
            className="xl:min-w-full image"
          />
          <div className="absolute top-0 py-4 px-6">
            <h2 className="text-white text-5xl font-light">Taycan</h2>
          </div>
          <div className="absolute bottom-0 flex py-6 px-6 w-full items-center">
            <div className="bg-white mr-4 w-5/12 flex items-center">
              <p className="text-black p-4 ">
                <i className="fas fa-location-arrow px-2" />
                configurar
              </p>
            </div>
            <div className=" border border-solid border-white  w-1/3 hover:border-danger-400 cursor-pointer">
              <p className="text-white p-4 hover:text-danger-400">
                <i className="fas fa-chevron-right px-2" />
                Ver tudo
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center">
        <div className="relative w-1/3">
          <img
            src="https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-panamera/small/31077aa2-d337-11ea-80cc-005056bbdc38;sQ;twebp;c1693;gc/porsche-small.webp"
            alt="Panamera"
            className="image"
          />
          <div className="absolute top-0 py-4 px-6">
            <h2 className="text-white text-5xl font-light">Panamera</h2>
          </div>
          <div className="absolute bottom-0 flex py-6 px-6 w-full items-center">
            <div className=" border border-solid border-white  w-1/3 hover:border-danger-400 cursor-pointer">
              <p className="text-white p-4 hover:text-danger-400">
                <i className="fas fa-chevron-right px-2" />
                Ver tudo
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-1/3">
          <img
            src="https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-macan/small/46131fe4-6694-11e9-80c4-005056bbdc38;sQ;twebp;c1693;gc/porsche-small.webp"
            alt="Macan"
            className="image"
          />
          <div className="absolute top-0 py-4 px-6">
            <h2 className="text-white text-5xl font-light">Panamera</h2>
          </div>
          <div className="absolute bottom-0 flex py-6 px-6 w-full items-center">
            <div className=" border border-solid border-white  w-1/3 hover:border-danger-400 cursor-pointer">
              <p className="text-white p-4 hover:text-danger-400">
                <i className="fas fa-chevron-right px-2" />
                Ver tudo
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-1/3">
          <img
            src="https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-cayenne/small/46131fe5-6694-11e9-80c4-005056bbdc38;sQ;twebp;c1693;gc/porsche-small.webp"
            alt="Cayenne"
            className='image'
          />
          <div className="absolute top-0 py-4 px-6">
            <h2 className="text-white text-5xl font-light">Cayenne</h2>
          </div>
          <div className="absolute bottom-0 flex py-6 px-6 w-full items-center">
            <div className=" border border-solid border-white  w-1/3 hover:border-danger-400 cursor-pointer">
              <p className="text-white p-4 hover:text-danger-400">
                <i className="fas fa-chevron-right px-2" />
                Ver tudo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
