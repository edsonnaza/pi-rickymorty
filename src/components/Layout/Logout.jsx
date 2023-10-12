import classes from './Logout.module.css';
const Logout = (props)=>{

    
    return (
        <div className={classes.container}>
          
          <hr />
          <h3 className="heading">{'Hello Admin!'}</h3>
          <hr />
          <div className="form_buttons">
            <button 
            className={classes.btn}
            onClick={props.logOut}
            >
              Log Out
            </button>
          </div>
        </div>)
    
}

export default Logout;