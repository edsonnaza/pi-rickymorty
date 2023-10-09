import { useParams, Link } from "react-router-dom";
import classes from './Detail.module.css';
import DetailItem from './DetailItem';
import { useEffect, useState } from "react";
import axios from "axios";




const Detail = () =>{
    const {id}=useParams();
   
     
    const [characters, setCharacters]= useState([]);
   

    useEffect(()=>{
      
        const miApiKey='pi-edsonnaza';
        axios(`https://rym2.up.railway.app/api/character/${id}?key=${miApiKey}`).then(
            ({ data }) => {
               if (data.name) {
                  setCharacters([data]);
                 // setPreImg(PreIMG_INIT);
                  
               } else {
                  window.alert('¡No hay personajes con este ID!'+ id);
               }
            }).catch(error =>console.log(error))     
   
         },[])
     console.log(characters);
    return (
             
              characters.map((item)=>( 
              item.name &&  // checking if characters has data.
              <DetailItem 
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                species={item.species}
                status={item.status}
                origin={item.origin.name}
                type={item.type}
              
              />
          
              )
        )
    )
}

export default Detail;