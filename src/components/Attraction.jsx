import React from "react";


function Card({title, info, img, imagePlacement}){
  const imageFix = {
    width: '100%',
    height: '100%'
  }
  return (
    
    <div className="flex flex-col justify-center">
        {(imagePlacement == 'up') && <img src={img} alt={title} style={imageFix} className="w-5/5 rounded placeOfIntrest" />}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl m-4">{title}</h2>
          <p className="text-center	text-lg">
            {info}
          </p>
        </div>
        {(imagePlacement == 'down') && <img src={img} alt={title} style={imageFix} className="w-5/5 rounded" />}
      </div>
  )
}

function HorizontalCard({title, info, img, imagePlacement}){
  return (
    <div className="mx-10 bg-gray-200 mt-5 flex flex-col items-center justify-center shadow-xl">
        <Card title={title} info={info} img={img} imagePlacement={imagePlacement} />
      </div>
  )
}

function Attraction({places}) {
  return (
    <div>
        <p className="text-5xl my-10 text-center text-gray-600">Place of Intrest</p>
      <div className="grid grid-cols-3 justify-center">
        {places.map((place, index) => {
          return <HorizontalCard keys={index} title={place.name} info='' img={place.img} imagePlacement='up' />
        })}
      </div>
    </div>
  );
}

export default Attraction;
