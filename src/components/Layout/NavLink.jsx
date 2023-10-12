import classes from './Nav.module.css';
import { Link } from 'react-router-dom';
const NavLink = (props)=>{
  return ( <ul className={classes.ul}>  
    <li className={classes['li']}><Link to={'/'}> Home </Link></li>
    <li className={classes.li}><Link to={'/About'}>About </Link></li> 
    
  </ul>)
   
}

export default NavLink;