import { useState, useEffect } from 'react';
//import './App.css';
import Nav from './components/Layout/Nav';
import Cards from './components/Cards/Cards';
import ImgPrev from './components/ImgPrev/ImgPrev';
import Error from './views/Error';
import About from './views/About';
import Detail from './views/Detail';
import axios from 'axios';
import imageAbout from './assets/rickymortyWallPaper.png';
import Form from './components/Form/Form';
 

//import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importa los componentes necesarios de react-router-dom
import { useNavigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
 
 

function App() {
   const PreIMG_INIT = [{image:'',name:''}];
   const [characters, setCharacters] = useState([]);
   const [logged, setLogged] = useState(false);
   const [loginMessage, setLoginMessage] = useState(true);
   const [preImg, setPreImg]=useState(PreIMG_INIT);
   const [responseData,setResponseData]=useState(true);
   const miApiKey='pi-edsonnaza';
   // const EMAIL="user@gmail.com";
   // const PASSWORD="passWord123";
   const EMAIL="";
   const PASSWORD="";
   const navigate = useNavigate();
   

   const onLogin = (userInput)=>{
      setLoginMessage("");
      if(userInput.password == PASSWORD && userInput.email === EMAIL){
         console.log('loged successfully!');
         setLogged(true);
         navigate('/');
      } else {
         

            setLoginMessage('User or password invalid, please try again!');
         } 

      }

   const cleanLoginMessage= ()=>{
      setLoginMessage('');
   }
   
   const logOut = ()=>{
      setLogged(false);
   }
   
   useEffect(()=>{
       !logged && navigate('/login');
    },[logged]);

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
   const pathname = useLocation();
 
   return (  
      <div  >
       
      
        { 
       
         <Nav  
         logOut={logOut}
         logged={logged} 
         onSearch={onSearch} 
         onSearchPrevImg={onSearchPrevImg}  
         responseData={responseData} />
       
        
        }  
         <br />
        
         
          
         <Routes>
            <Route path='/login' element = {<Form onLogin={onLogin} loginMessage={loginMessage} cleanLoginMessage={cleanLoginMessage}/>} />
            <Route path='/' element={<Cards characters={characters} onClose={onClose} logged={logged} />} />
            <Route path='/about' element={<About image={imageAbout} />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Error />} />
         </Routes>
         <br />
         <ImgPrev preImg={preImg} />
         <br />
        
         
      </div> 
   );
}

export default App;
