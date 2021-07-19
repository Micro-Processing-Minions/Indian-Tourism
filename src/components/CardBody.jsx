import React from "react";
import Attraction from "./Attraction";
import DemoCarousel from "./DemoCarousel";
function CardBody() {
  return (
    <div className="mainDiv ">
      <div className="flex flex-col justify-center 	items-center 			">
        <img
          src="/assets/sumit-sourav-eSRtxPd9q1c-unsplash.jpg "
          alt="main"
          className="m-8 w-3/5 box-border	filter drop-shadow-2xl	"
        />

        <div className="absolute left-1/3 top-1/3	-translate-x-2/4 -translate-y-2/4	 text-center	text-gray-100		">
          <h3 className="text-9xl">Goa</h3>
          <p className="text-3xl	">Land of sun, sand and spices</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-gray-300	p-16">
        <p className=" m-8	text-2xl	text-gray-600		">Home / Destinations / Goa</p>

        <p className=" text-lg	w-5/6	text-center	 text-gray-500	">
          The pocket-sized paradise of Goa is a traveller's dream. Sun, sea,
          sand, spices, spirituality and seafood, along with a balmy weather,
          call to the soul of trekkers, backpackers, nature lovers and those who
          simply want to languish in its slow-paced and relaxed vibes. Located
          by the glistening waters of the Arabian Sea on India’s western coast,
          the state of Goa is renowned for its breathtaking beaches, rich
          culture and pristine natural beauty. Formerly a Portuguese colony, Goa
          offers travellers a chance to experience a unique blend of sandy
          shores, forests, monuments and delectable cuisine, attracting tourists
          across age groups.
        </p>
      </div>

      <div>
        <Attraction />
      </div>
    </div>
  );
}

export default CardBody;
