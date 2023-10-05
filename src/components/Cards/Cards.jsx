import Card from '../Card/Card';
import classes from './Cards.module.css';

export default function Cards(props) {
   const data = props.characters;
   //console.log(props.onClose);

       return <div className={classes.wrap} >
        
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
            

         
     
   </div>;
}