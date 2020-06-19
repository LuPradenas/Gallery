import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import Header from './/Components/Header/Header'
import Gallery from './Components/Gallery/Gallery';
import Imagen from './Data';
function App() {
  return (
    <div>
    <NavBar />
    <Header/>
    <Gallery imgURLs={Imagen} />
    </div>
  );
}

export default App;
