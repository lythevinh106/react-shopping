import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Defaultayout from './layout/Defaultlayout/Defaultayout';
import { publicRoutes } from './routes/routes';
import { Fragment } from 'react';





function App() {
  return (


    

    
 <Routes>


{console.log("render cua trang")}





     {publicRoutes.map((route,index)=>{

         let Layout =route.layout || Defaultayout;
         if(route.layout===null){
               Layout=Fragment;

         }


         return( <Route key={index} path={route.path} element={<Layout><route.element></route.element></Layout>} />)
 


})}

       
        {/* <Route path="users/*" element={<Users />} /> */}
 </Routes>
 
  
  );
}

export default App;
