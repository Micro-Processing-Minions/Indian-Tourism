import React from "react";


function Card({title, info, imagePlacement}){
  return (
    
    <div className="flex justify-center">
        {(imagePlacement == 'up') && <img src="./assets/22.jpg" alt="" className="w-2/5 rounded m-16 shadow-2xl" />}
        <div className="flex flex-col justify-center  items-center">
          <h2 className="text-3xl">{title}</h2>
          <p className="text-center	m-2 text-lg">
            {info}
          </p>
        </div>
        {(imagePlacement == 'down') && <img src="./assets/22.jpg" alt="" className="w-2/5 rounded m-16 shadow-2xl" />}
      </div>
  )
}

function HorizontalCard({title, info, imagePlacement}){
  return (
    <div className="mx-24		 bg-gray-200	  mt-32 flex flex-col 	items-center  justify-center shadow-xl">
        <h1 className="text-3xl m-2">Attraction</h1>
        <p className="text-xl">The legacy of Goa through its attractions</p>
        <Card title={title} info={info} imagePlacement={imagePlacement} />
      </div>
  )
}

function Attraction() {
  return (
    <div className="	flex flex-col  justify-center	">
      <HorizontalCard title='Some Place' info='Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            delectus iste ut unde quae minima exercitationem, soluta eligendi
            numquam eum, rem praesentium repudiandae cupiditate totam ea velit
            debitis deleniti consectetur. Placeat, excepturi voluptate soluta
            officiis ipsum rerum beatae nulla! Id reiciendis a mollitia
            aliquam omnis esse maiores, eveniet quos laboriosam cum, ipsam est
            natus saepe dicta exercitationem tempore, magnam ullam?' imagePlacement='down' />

      <HorizontalCard title='Some Place' info='Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            delectus iste ut unde quae minima exercitationem, soluta eligendi
            numquam eum, rem praesentium repudiandae cupiditate totam ea velit
            debitis deleniti consectetur. Placeat, excepturi voluptate soluta
            officiis ipsum rerum beatae nulla! Id reiciendis a mollitia
            aliquam omnis esse maiores, eveniet quos laboriosam cum, ipsam est
            natus saepe dicta exercitationem tempore, magnam ullam?' imagePlacement='up' />
    </div>
  );
}

export default Attraction;
