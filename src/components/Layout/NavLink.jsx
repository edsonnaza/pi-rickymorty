 
import { Link } from 'react-router-dom';
const NavLink = (props)=>{

  return ( 
 <>
   <Link to={'/'} className={props.linknav} > <span className={props.itemnav}>Home</span>  </Link>
    <Link to={'/About'} className={props.linknav}><span className={props.itemnav}>About </span></Link> 
 </>
   
    
  )
   
}

export default NavLink;