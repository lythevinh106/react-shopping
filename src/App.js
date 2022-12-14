import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Defaultayout from './layout/Defaultlayout/Defaultayout';
import { publicRoutes } from './routes/routes';
import { Fragment } from 'react';
import { ScrollRestoration } from "react-router-dom";





function App() {
  return (

    <Routes>



      {publicRoutes.map((route, index) => {

        let Layout = route.layout || Defaultayout;
        if (route.layout === null) {
          Layout = Fragment;

        }


        let LayoutMode = Fragment;

        if (route.layoutMode) {
          LayoutMode = route.layoutMode;

        }


        let Layer = Fragment;
        if (route.layer) {
          Layer = route.layer;

        }



        return (





          <Route key={index} path={route.path}
            element={<Layer> <LayoutMode><Layout><route.element></route.element></Layout></LayoutMode></Layer>} />



        )

      })}


      {/* <Route path="users/*" element={<Users />} /> */}
    </Routes>


  );
}

export default App;
