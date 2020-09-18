import React from "react";

// import hero from '../../utils/imageBackground/'
import Header from "../Header/Header";

import Slider from "react-slick";

export default function Hero() {
  return (
    <div className="">
      <Header />
      <Slider infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} className='py-4'>
        <div>
          <img
            src="https://files.porsche.com/filestore/image/multimedia/none/rd-2019-homepage-banner-ww-macangts-kw51/normal/64683105-1b38-11ea-80c6-005056bbdc38;sM;twebp/porsche-normal.webp"
            alt="Maquina mortifera"
            className='outline-none'
          />
        </div>
        <div>
          <img
            src="https://files.porsche.com/filestore/image/multimedia/none/rd-2019-homepage-banner-ww-taycantops-kw36/normal/f95e20c7-cd85-11e9-80c5-005056bbdc38;sM;twebp/porsche-normal.webp"
            alt="Taycan"
            className='outline-none'
          />
        </div>
        <div>
          <img
            src="https://files.porsche.com/filestore/image/multimedia/none/rd-2020-homepage-banner-ww-992topscoupe-kw12/normal/069991f4-6505-11ea-80c8-005056bbdc38;sM;twebp/porsche-normal.webp"
            alt="911 turbo"
            className='outline-none'
          />
        </div>
        <div>
          <img
            src="https://files.porsche.com/filestore/image/multimedia/none/rd-2020-homepage-banner-pbr-approved-kw15/normal/13ad9291-74f7-11ea-80c9-005056bbdc38;sM;twebp/porsche-normal.webp"
            alt="Porsche Approved"
            className='outline-none'
          />
        </div>
      </Slider>
    </div>
  );
}
