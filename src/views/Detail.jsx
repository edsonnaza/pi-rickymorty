import { useParams } from "react-router-dom";

const Detail = () =>{
const id =useParams.id;
    return (<>
            
        <h1>Detail id:{id}</h1>
    </>)
}

export default Detail;