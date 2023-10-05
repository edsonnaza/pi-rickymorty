import { useState } from 'react';
import './App.css';
import Nav from './components/Layout/Nav';
import Cards from './components/Cards/Cards';
import ImgPrev from './components/ImgPrev/ImgPrev';
import axios from 'axios';
 


function App() {
   const PreIMG_INIT = [{image:'',name:''}];
   const [characters, setCharacters] = useState([]);
   const [preImg, setPreImg]=useState(PreIMG_INIT);
   const [responseData,setResponseData]=useState(true);
   const miApiKey='pi-edsonnaza';
   

   const onSearchPrevImg = (id) =>{
      setPreImg(PreIMG_INIT);
      setResponseData(true);
      axios(`https://rym2.up.railway.app/api/character/${id}?key=${miApiKey}`).then(
         ({ data }) => {
            if(data.name){
                    
                  setPreImg([{image:data.image,name:data.name}]);
            } else {
               if(id!==Number(0))
               {  console.log(preImg.name);
                  setResponseData(false);
                  
               
               }
            }
         }
      ).catch(error =>console.log(error)) 
      
   }
   const onSearch = (id)=> {
        //console.log(id);

        axios(`https://rym2.up.railway.app/api/character/${id}?key=${miApiKey}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
               setPreImg(PreIMG_INIT);
               
            } else {
               window.alert('¡No hay personajes con este ID!'+ id);
            }
         }).catch(error =>console.log(error))     

      }
       
   

   const onClose = (id) => {
      console.log('onClose',id);
       setCharacters(characters.filter((item)=>item.id!==Number(id)))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} onSearchPrevImg={onSearchPrevImg}  responseData={responseData} />
         <br /><hr />
         <Cards characters={characters} onClose={onClose}  />
         <br />
         <ImgPrev preImg={preImg} />
         <br />
        
         
      </div>
   );
}

export default App;
