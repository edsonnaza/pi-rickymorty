import { useState, useEffect } from "react";
import classes from './SearchBar.module.css';
export default function SearchBar(props) {
   const [userId, setUserId] = useState('');
   
   //console.log(props);
 useEffect(()=>{
   const identifier = setTimeout(()=>{
      console.log('Checking the timer',userId);
      if(userId.length>0)
     { props.onSearchPrevImg(userId);
      
      }

      else props.onSearchPrevImg(0);
      
   },500);

   return ()=>{
      console.log('CLEANUP');
      clearTimeout(identifier);
   }
 },[userId]);

 const handleChange = (ev)=>{
   ev.preventDefault();
   const id = ev.target.value;
   setUserId(id);
  
   //console.log(userId);


}

   
   return (
      <div   >
         
         <input className={classes.input} onChange={handleChange} value={userId} type='search' />
         <button className={classes.button} onClick={()=>props.onSearch(userId)}>Agregar</button>
       
      </div>
   );
}
