import SearchBar from '../SearchBar/SearchBar';
import classes from './Nav.module.css';
import { Link } from 'react-router-dom';
 
 

const Nav = (props) => {
 
 
 

    return (<nav className={classes.header}> <h1 >Ricky and Morty</h1>
    <br />
          <ul className={classes.ul}>  
          <li className={classes['li']}> <Link to={'/'}>  Home </Link></li>
           
          <li className={classes.li}> <Link to={'/About'}>  About </Link></li> </ul>
        
    {
            !props.responseData && <div className={classes.response}>Character not found!</div>
         }
       <SearchBar onSearch={props.onSearch}   onSearchPrevImg={props.onSearchPrevImg}/>
        
        
     

    </nav>)
}
export default Nav;