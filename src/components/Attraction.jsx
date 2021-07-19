import React from "react";

function Attraction() {
  return (
    <div className="	flex flex-col  justify-center	">
      <div className="mx-24		 bg-gray-200	  mt-32 flex flex-col 	items-center  justify-center shadow-xl">
        <h1 className="text-3xl m-2">Attraction</h1>
        <p className="text-xl">The legacy of Goa through its attractions</p>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center  items-center">
            <h2 className="text-3xl">Some Place</h2>
            <p className="text-center	m-2 text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
              delectus iste ut unde quae minima exercitationem, soluta eligendi
              numquam eum, rem praesentium repudiandae cupiditate totam ea velit
              debitis deleniti consectetur. Placeat, excepturi voluptate soluta
              officiis ipsum rerum beatae nulla! Id reiciendis a mollitia
              aliquam omnis esse maiores, eveniet quos laboriosam cum, ipsam est
              natus saepe dicta exercitationem tempore, magnam ullam?
            </p>
          </div>
          <img
            src="/assets/22.jpg"
            alt=""
            className="w-2/5 rounded m-16 shadow-2xl"
          />
        </div>
      </div>
      <div className=" mx-24 mt-8	 bg-gray-200	  flex flex-col 	items-center  justify-center self-center shadow-2xl	">
        <h1 className="text-3xl m-2">Attraction</h1>
        <p className="text-xl">The legacy of Goa through its attractions</p>
        <div className="flex justify-center">
          <img
            src="/assets/22.jpg"
            alt=""
            className="w-2/5 m-16 rounded shadow-2xl"
          />
          <div className="flex flex-col justify-center  items-center">
            <h2 className="text-3xl">Some Place</h2>
            <p className="text-center	m-2 text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
              delectus iste ut unde quae minima exercitationem, soluta eligendi
              numquam eum, rem praesentium repudiandae cupiditate totam ea velit
              debitis deleniti consectetur. Placeat, excepturi voluptate soluta
              officiis ipsum rerum beatae nulla! Id reiciendis a mollitia
              aliquam omnis esse maiores, eveniet quos laboriosam cum, ipsam est
              natus saepe dicta exercitationem tempore, magnam ullam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attraction;
