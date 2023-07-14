import React from "react";

 export default function Fruits(){
    return(
        <div class="grid grid-cols-1 p-10 gap-8 place-items-stretch h-56 md:grid-cols-3 sm:grid-cols-2 grid-wrap">
        <div className="flex flex-col gap-2 bg-[#FF8989] rounded-md md:flex-row">
          <img src='https://picsum.photos/id/1080/200/200' className="rounded-md"/>
          <div>
          <h1 className="text-center tracking-wide m-3 font-bold">Strawberry</h1>
          <p className="m-8 md:m-2 sm:m-4 text-justify">A strawberry is actually a multiple fruit which consists of many tiny individual fruits embedded in a fleshy receptacle. </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-[#FF8989] rounded-md md:flex-row" >
        <img src='https://picsum.photos/id/766/200/200' className="rounded-md"/>
         <div>
          <h1 className="text-center tracking-wide m-3 font-bold">Coffee</h1>
          <p className="m-8 md:m-2 sm:m-4 text-justify">
          Coffee is delivered from the seeds of a little red natural product that develops on plants mostly in size among bush and tree. 
          </p>
          </div>
          </div>
        <div className="flex flex-col gap-2 bg-[#FF8989] rounded-md md:flex-row">
        <img src='https://picsum.photos/id/674/200/200' className="rounded-md"/>
          <div>
          <h1 className="text-center tracking-wide m-3 font-bold">Grapes</h1>
          <p className="m-8 md:m-2 sm:m-4 text-justify">A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. </p>
          </div>       
           </div>
        <div className="flex flex-col gap-2 bg-[#FF8989] rounded-md md:flex-row">
        <img src='https://picsum.photos/id/429/200/200' className="rounded-md"/>
           <div>
          <h1 className="text-center tracking-wide m-3 font-bold">Raspberry</h1>
          <p className="m-8 md:m-2 sm:m-4 text-justify">The raspberry is the edible fruit of a multitude of plant species in the genus Rubus of the rose family, most of which are in the subgenus Idaeobatus.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-[#FF8989] rounded-md md:flex-row">
        <img src='https://picsum.photos/id/824/200/200' className="rounded-md"/>
         <div>
          <h1 className="text-center tracking-wide m-3 font-bold">Pineapple</h1>
          <p className="m-8 md:m-2 sm:m-4 text-justify">The pineapple is a tropical plant with an edible fruit; it is the most economically significant plant in the family Bromeliaceae.</p>
          </div>       
           </div>
        <div className="flex flex-col gap-2 bg-[#FF8989] rounded-md md:flex-row">
        <img src='https://picsum.photos/id/517/200/200' className="rounded-md"/>
         <div>
          <h1 className="text-center tracking-wide m-3 font-bold">Orange</h1>
          <p className="m-8 md:m-2 sm:m-4 text-justify">Orange trees have dark green shiny leaves and small white flowers with five petals. The flowers smell very sweet which attracts many bees.</p>
          </div>     
          </div>
      </div>
    )
 };