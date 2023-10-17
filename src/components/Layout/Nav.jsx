import SearchBar from '../SearchBar/SearchBar';
import Logout from './Logout';
import classes from './Nav.module.scss';
import NavLink from './NavLink';
import logoRM from '../../assets/Rick_and_Morty.svg';
 
 
 

const Nav = (props) => {
 
 
 console.log(props.loginIn);

    return (

        <div className={classes.navContainer}>

            {/* DIV FOR LOGO */}
            <div>
                <img className={classes.logo} src={logoRM} alt='R&M Logo' />
                 
            </div>

            {/* DIV FOR SEARCH AND NAVIGATION */}

            <div className={classes.secondSection}>
    
            <div className={classes.wrapperItems}>
               {props.logged &&  
                <NavLink 
                linknav={classes.linknav}
                itemnav={classes.itemnav}
                />}
            </div>
              
              <div className={classes.thirdSection}> 
               
               
              

  
              <div className={classes.searchbarDiv}>     
              {props.logged && 
              <SearchBar onSearch={props.onSearch}   
              onSearchPrevImg={props.onSearchPrevImg}/>} 
              { !props.responseData && 
               <div className={classes.response}>
                Character not found!
               </div> }
              </div>
         
               <div className={classes.logoutDiv}>
                {props.logged && <Logout logOut={props.logOut} />}
               </div>
         
     
    </div>
    </div>
    </div>)
}
export default Nav;