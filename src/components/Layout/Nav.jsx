import SearchBar from '../SearchBar/SearchBar';
import classes from './Nav.module.css';
 
 

const Nav = (props) => {
console.log(props);
 
 

    return (<nav className={classes.header}> <h1 >Ricky and Morty</h1>
    <br />
    {
            !props.responseData && <p className={classes.response}>Character not found!</p>
         }
       <SearchBar onSearch={props.onSearch}   onSearchPrevImg={props.onSearchPrevImg}/>
        
        
     

    </nav>)
}
export default Nav;