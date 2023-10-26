import Cards from '../Cards/Cards';
import { useSelector,useDispatch } from 'react-redux';
import classes from './FavoritesChar.module.scss'

const FavoritesChar = (props) => {
    const myFavorites = useSelector((state)=>state.myFavorites);

    return ( < >
    {!myFavorites.length && <h1><center>No favorite characters were selected!</center></h1>}
     { myFavorites.length && <h2><center>My Favorite Characters</center></h2> }

     
      
      {myFavorites && 
        
       <Cards 
       characters={myFavorites} 
       onClose={props.onClose} 
       logged={props.logged}
       /> } 



           </>
    )
}

export default FavoritesChar;