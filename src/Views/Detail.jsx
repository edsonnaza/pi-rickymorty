import { useParams, Link } from "react-router-dom";
import classes from './Detail.module.css';
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

              characters.map((item)=>
              
              <div key={item.id} className={classes.wrapper}>

              <div className={classes['product-img']}>
                <img className={classes.img}   src={item.image}  alt={item.name} />
              </div>

              <div className={classes['product-info']} >
                <div className={classes["product-text"]} >
                    <h1 className={classes['h1']}>{item.name}</h1>
                    <h2 className={classes['h2']}>{item.species}</h2>
                    <h2 className={classes.h2}>Status:{item.status}</h2>
                    <h2>Origin: {item.origin.name} </h2> 
                    <p>Type: {item.type}</p>
                </div>
                <div className={classes["product-price-btn"]}>
                    <Link to='/'>
                        <button className={classes.button} type="button">Home</button>
                    </Link>
                    

                </div>
              </div>
              </div>

              
             
              
              )
        
          )
}

export default Detail;