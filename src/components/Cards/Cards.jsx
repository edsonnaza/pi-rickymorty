import Card from '../Card/Card';
import classes from './Cards.module.css';
import Bienvenido from '../Layout/Bienvenido';

export default function Cards(props) {
   const data = props.characters;
   console.log(data.length);
   //console.log(props.onClose);
   
       return(  <div className={classes.wrap} >
           
          { 
            !data.length && <Bienvenido />}
          { 
            
            data.map( (item)=>(
                <Card 
                key={item.id}
                name={item.name}
                species={item.species}
                status={item.status}
                gender={item.gender}
                orgin={item.orgin}
                image={item.image}
                id={item.id}
                onClose={props.onClose}


                />
            ))

        }
            

         
     
   </div>);
}
