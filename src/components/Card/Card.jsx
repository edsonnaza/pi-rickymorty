import classes from './Card.module.css';
export default function Card(props) {
   const closeHandler = (id) => {
    ///  console.log('close handler', id)
     props.onClose(id);
   }
   return (
     
         <div className={classes.box}>
         <button className={classes['button']} onClick={() => closeHandler(props.id)}>X</button>
      
         <div className={classes['box-top']}>
          
            <h3 className={classes['box-title']}>{props.name}</h3>
              
          
              <p className={classes['gender']}>{props.gender}</p>
         
              <p className={classes.description}>{props.species}</p>
               <p className={classes.description}>{props.status}</p>
             <p className={classes.description}>{props.origin}</p>
         <img className={classes['box-image']} src={props.image} alt={props.name} />
      </div>
      </div>
     
   );
}