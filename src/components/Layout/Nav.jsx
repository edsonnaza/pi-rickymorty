import SearchBar from '../SearchBar/SearchBar';
import Logout from './Logout';
import classes from './Nav.module.css';
import NavLink from './NavLink';
 
 
 

const Nav = (props) => {
 
 
 console.log(props.loginIn);

    return (<nav className={classes.header}> <h1 >Ricky and Morty</h1>
    <br /> {props.logged &&   <NavLink />}

  
           { !props.responseData && <div className={classes.response}>Character not found!</div> }
         
           {props.logged && <SearchBar onSearch={props.onSearch}   onSearchPrevImg={props.onSearchPrevImg}/>} 
        
        {props.logged && <Logout logOut={props.logOut} />}
     

     
    </nav>)
}
export default Nav;