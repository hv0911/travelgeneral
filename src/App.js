import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data"
console.log(data)



export default function App(){

   const mainElements = data.map( items=>{
      return( <Main
         title={items.title}
         location={items.location}
         description={items.description}
         img={items.imageUrl}
         startDate={items.startDate}
         endDate={items.endDate}
         googleMapUrl={items.googleMapsUrl}
           />

      )
   })

   return(
    <div className="container">
    <Header />
    {mainElements}
    </div>
   )
      
       
}