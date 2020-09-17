import React from "react";

// import hero from '../../utils/imageBackground/'
import Header from "../Header/Header";

export default function Hero() {
  return (
    <div className=''>
      <Header />
      <img
        src="https://files.porsche.com/filestore/image/multimedia/none/rd-2019-homepage-banner-ww-macangts-kw51/normal/64683105-1b38-11ea-80c6-005056bbdc38;sM;twebp/porsche-normal.webp"
        alt=""
        className='py-4 xl:min-w-full md:min-w-full '
      />
    </div>
  );
}
