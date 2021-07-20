import React from "react";


function Card({title, info, img, imagePlacement}){
  return (
    
    <div className="flex justify-center">
        {(imagePlacement == 'up') && <img src={img} alt={title} className="w-2/5 rounded m-16 shadow-2xl" />}
        <div className="flex flex-col justify-center  items-center">
          <h2 className="text-3xl">{title}</h2>
          <p className="text-center	m-2 text-lg">
            {info}
          </p>
        </div>
        {(imagePlacement == 'down') && <img src={img} alt={title} className="w-2/5 rounded m-16 shadow-2xl" />}
      </div>
  )
}

function HorizontalCard({title, info, img, imagePlacement}){
  return (
    <div className="mx-24		 bg-gray-200	  mt-32 flex flex-col 	items-center  justify-center shadow-xl">
        <Card title={title} info={info} img={img} imagePlacement={imagePlacement} />
      </div>
  )
}

function Attraction({places}) {
  return (
    <>
      {places.map((place, index) => {
        return (
          <div className="	flex flex-col  justify-center	">
            <HorizontalCard title={place.name} info='' img={place.img} imagePlacement='up' />
          </div>
        )
      })}
    </>
  );
}

export default Attraction;
